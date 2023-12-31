"use strict";

function initializePayPalButtons(w, $scope) {
	let buttons = w.querySelector(".dce-paypal-buttons")
	if ( typeof paypal === "undefined" ) {
		buttons.textContent = "There was an error loading PayPal. Is the PayPal Client ID valid?";
	} else {
		let orderIDInput =	w.querySelector("input");
		let approvedMsg =	w.querySelector(".dce-paypal-approved")
		let buttonsID =		`#${buttons.getAttribute('id')}`;
		let orderName =		buttons.getAttribute('data-name');
		let nameFieldId;
		if (! orderName) {
			nameFieldId = buttons.getAttribute('data-name-field-id');
		}
		let orderCurrency = buttons.getAttribute('data-currency');
		let orderValue =	buttons.getAttribute('data-value');
		let valueFieldId;
		if (! orderValue) {
			valueFieldId = buttons.getAttribute('data-value-field-id');
		}
		let description =	buttons.getAttribute('data-description');
		let sku =			buttons.getAttribute('data-sku');
		let height =		parseInt(buttons.getAttribute('data-height'));
		let layout =		buttons.getAttribute('data-layout');
		paypal.Buttons({
			style: {
				layout: layout,
				height: height,
			},
			createOrder: function(data, actions) {
				if (! orderValue) {
					let fd = new FormData($scope.find('form')[0]);
					orderValue = fd.get(`form_fields[${valueFieldId}]`);
				}
				if (! orderName) {
					let fd = new FormData($scope.find('form')[0]);
					orderName = fd.get(`form_fields[${nameFieldId}]`);
				}
				return actions.order.create({
					purchase_units: [{
						items: [
							{
								name: orderName,
								sku: sku,
								description: description,
								unit_amount: {
									currency_code: orderCurrency,
									value: orderValue
								},
								quantity: '1'
							}
						]
						,
						amount: {
							value: orderValue,
							currency_code: orderCurrency,
							breakdown: { item_total: {
								value: orderValue,
								currency_code: orderCurrency
							} }
						}
					}]
				});
			},
			onApprove: function(data, actions) {
				orderIDInput.value = data.orderID;
				// fire change event so conditions can be updated.
				let evt = document.createEvent("HTMLEvents");
				evt.initEvent("change", false, true);
				orderIDInput.dispatchEvent(evt);
				buttons.style.display = "none";
				approvedMsg.style.display = "block";
			}
		}).render(buttonsID);
	}
};

function initializeAllPayPalButtons($scope) {
	$scope.find('.tooto-field-type-dce_form_paypal').each((_, w) => initializePayPalButtons(w, $scope));
}

jQuery(window).on('tooto/frontend/init', function() {
	tootoFrontend.hooks.addAction('frontend/element_ready/form.default', initializeAllPayPalButtons);
});
