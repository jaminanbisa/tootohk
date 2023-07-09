function get_Dyncontel_ElementSettings($element) {
        var elementSettings = [];
        var modelCID = $element.data('model-cid');
        if (tootoFrontend.isEditMode() && modelCID) {
            var settings = tootoFrontend.config.elements.data[modelCID];
            var type = settings.attributes.widgetType || settings.attributes.elType;
            var settingsKeys = tootoFrontend.config.elements.keys[ type ];
            if (!settingsKeys) {
                settingsKeys = tootoFrontend.config.elements.keys[type] = [];
                jQuery.each(settings.controls, function (name, control) {
                    if (control.frontend_available) {
                        settingsKeys.push(name);
                    }
                });
            }
            jQuery.each(settings.getActiveControls(), function (controlKey) {
                if (-1 !== settingsKeys.indexOf(controlKey)) {
                    elementSettings[ controlKey ] = settings.attributes[ controlKey ];
                }
            });
        } else {
            elementSettings = $element.data('settings') || {};
        }
        return elementSettings;
}

function observe_Dyncontel_element( $target, $function_callback ){
    if (tootoFrontend.isEditMode()) {
        // Seleziona il nodo di cui monitare la mutazione
        var elemToObserve = $target;

        /*
        // NOTA: le proprietà di observe
        mutationObserver.observe(document.documentElement, {
          attributes: true,
          characterData: true,
          childList: true,
          subtree: true,
          attributeOldValue: true,
          characterDataOldValue: true
        });*/

        // Opzioni per il monitoraggio (quali mutazioni monitorare)
        var config = { 
            attributes: true, 
            childList: false, 
            characterData: true 
        };

        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        // Creazione di un'istanza di monitoraggio collegata alla funzione di callback
        var observer = new MutationObserver( $function_callback );

        // Inizio del monitoraggio del nodo target riguardo le mutazioni configurate
        observer.observe(elemToObserve, config);

        // Successivamente si può interrompere il monitoraggio
    }

}
