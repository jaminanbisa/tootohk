(function (tooto, $, window) {
	// Query Control

	var ControlQuery = tooto.modules.controls.Select2.extend({
		cache: null,
		isTitlesReceived: false,

		getSelect2Placeholder: function getSelect2Placeholder() {
			var self = this;

			return {
				id: '',
				text: self.model.get("placeholder") || "All",
			};
		},

		getSelect2DefaultOptions: function getSelect2DefaultOptions() {
			var self = this;

			return jQuery.extend(
				tooto.modules.controls.Select2.prototype.getSelect2DefaultOptions.apply(
					this,
					arguments
				),
				{
					ajax: {
						transport: function transport(params, success, failure) {
							var data = {
								q: params.data.q,
								query_type: self.model.get("query_type"),
								query_options: self.model.get("query_options"),
								object_type: self.model.get("object_type"),
							};

							return tootoCommon.ajax.addRequest(
								"pp_query_control_filter_autocomplete",
								{
									data: data,
									success: success,
									error: failure,
								}
							);
						},
						data: function data(params) {
							return {
								q: params.term,
								page: params.page,
							};
						},
						cache: true,
					},
					escapeMarkup: function escapeMarkup(markup) {
						return markup;
					},
					minimumInputLength: 1,
				}
			);
		},

		getValueTitles: function getValueTitles() {
			var self = this,
				ids = this.getControlValue(),
				queryType = this.model.get("query_type"),
				queryOptions = this.model.get("query_options"),
				objectType = this.model.get("object_type");

			if (!ids || !queryType) return;

			if (!_.isArray(ids)) {
				ids = [ids];
			}

			tootoCommon.ajax.loadObjects({
				action: "pp_query_control_value_titles",
				ids: ids,
				data: {
					query_type: queryType,
					query_options: queryOptions,
					object_type: objectType,
					unique_id: "" + self.cid + queryType,
				},
				success: function success(data) {
					self.isTitlesReceived = true;
					self.model.set("options", data);
					self.render();
				},
				before: function before() {
					self.addSpinner();
				},
			});
		},

		addSpinner: function addSpinner() {
			this.ui.select.prop("disabled", true);
			this.$el
				.find(".tooto-control-title")
				.after(
					'<span class="tooto-control-spinner pp-control-spinner">&nbsp;<i class="fa fa-spinner fa-spin"></i>&nbsp;</span>'
				);
		},

		onReady: function onReady() {
			setTimeout(
				tooto.modules.controls.Select2.prototype.onReady.bind(this)
			);

			if (!this.isTitlesReceived) {
				this.getValueTitles();
			}
		},

		onBeforeDestroy: function onBeforeDestroy() {
			if (this.ui.select.data("select2")) {
				this.ui.select.select2("destroy");
			}

			this.$el.remove();
		},
	});

	// Add Control Handlers
	tooto.addControlView( 'pp-query', ControlQuery );

	// Woo Builder Preview.
	var onApplyPreview = function() {
		$e.run('document/save/auto', {
			force: true,
			onSuccess: function onSuccess() {
				tooto.reloadPreview();
			}
		});
	};

	tooto.on( 'document:loaded', function() {
		tooto.channels.editor.on('ppWooBuilder:ApplyPreview', onApplyPreview );
	} );
	tooto.on( 'document:unload', function() {
		tooto.channels.editor.on('ppWooBuilder:ApplyPreview', onApplyPreview );
	} );

	tooto.channels.editor.on( 'section:activated', function( sectionName, editor ) {
		var editedElement = editor.getOption('editedElementView');

		if ( 'pp-flipbox' !== editedElement.model.get( 'widgetType' ) ) {
			return;
		}

		var isSideBSection = -1 !== [ 'section_back', 'section_back_style', 'section_info_box_button_style' ].indexOf( sectionName );
		editedElement.$el.toggleClass( 'pp-flip-box--flipped', isSideBSection );
		var $backLayer = editedElement.$el.find( '.pp-flipbox-back' );

		if ( isSideBSection ) {
			$backLayer.css( 'transition', 'none' );
		}

		if ( ! isSideBSection ) {
			setTimeout( function () {
				$backLayer.css( 'transition', '' );
			}, 10 );
		}
	} );

} )( tooto, jQuery, window );
