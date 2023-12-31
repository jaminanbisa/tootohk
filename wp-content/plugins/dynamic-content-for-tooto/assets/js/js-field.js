"use strict";

window.dceJsField = {
	refresherGenerators: {}
};

dceJsField.registerRefresherGenerator = function(field_id, refresherGenerator) {
	this.refresherGenerators[field_id] = refresherGenerator;
}

jQuery(window).trigger('dce/jsfield-loaded');

let getFieldValue = (form, id) => {
	let data = new FormData(form);
	let key = `form_fields[${id}]`;
	if (data.has(key)) {
		return data.get(key);
	}
	key = `form_fields[${id}][]`
	if (data.has(key))  {
		return data.getAll(key);
	}
	return "";
}

let makeGetFieldFunction = (form) => {
	return (id, toFloat=false, defaultValue) => {
		let val = getFieldValue(form, id);
		if (defaultValue !== undefined && val === '') {
			val = defaultValue;
		}
		return toFloat ? parseFloat(val) : val;
	}
}

function initializeJsField(wrapper, widget) {
	let input = wrapper.getElementsByTagName('input')[0];
	let form = widget.getElementsByTagName('form')[0];
	let fieldId = input.dataset.fieldId;
	let realTime = input.dataset.realTime === 'yes';
	if (input.dataset.hide == 'yes') {
		wrapper.style.display = "none";
	}
	let refresherGenerator = dceJsField.refresherGenerators[fieldId];
	// if the user code has a syntax error the registration will have failed and
	// we won't find the field:
	if (! refresherGenerator) {
		input.value = jsFieldLocale.syntaxError;
		return;
	}
	let refresher = refresherGenerator(makeGetFieldFunction(form));
	if (typeof refresher !== "function") {
		input.value = jsFieldLocale.returnError;
		return;
	}
	let onChange = () => {
		input.value = refresher();
		if ("createEvent" in document) {
			var evt = document.createEvent("HTMLEvents");
			evt.initEvent("change", false, true);
			input.dispatchEvent(evt);
		}
		else {
			input.fireEvent("onchange");
		};
	}
	onChange();
	form.addEventListener(realTime ? 'input' : 'change', onChange);

}

function initializeAllJsFieldFields($scope) {
	$scope.find('.tooto-field-type-dce_js_field').each((_, w) => initializeJsField(w, $scope[0]));
}

jQuery(window).on('tooto/frontend/init', function() {
	if(tootoFrontend.isEditMode()) {
		return;
	}
	tootoFrontend.hooks.addAction('frontend/element_ready/form.default', initializeAllJsFieldFields);
});
