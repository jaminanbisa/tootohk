jQuery(window).on('tooto:init', function () {
    tooto.hooks.addFilter('elements/widget/contextMenuGroups', function (groups, widget) {
            return dceAddPasteAction(groups, widget);
    });
    tooto.hooks.addFilter('elements/column/contextMenuGroups', function (groups, column) {
            return dceAddPasteAction(groups, column);
    });
    tooto.hooks.addFilter('elements/section/contextMenuGroups', function (groups, section) {
            return dceAddPasteAction(groups, section);
    });
});

// add context menu item to add-section
jQuery(window).on('load', function () {
    setInterval(function () {
        if (!jQuery('.tooto-context-menu-list__group-paste .tooto-context-menu-list__item-dce_paste').length) {
            jQuery('.tooto-context-menu-list__group-paste .tooto-context-menu-list__item-paste').after(
                '<div class="tooto-context-menu-list__item tooto-context-menu-list__item-dce_paste"><div class="tooto-context-menu-list__item__icon"></div><div class="tooto-context-menu-list__item__title">Paste from Clipboard</div></div>'
            );
        }
    }, 1000);
    jQuery(document).on('click', '.tooto-context-menu-list__group-paste .tooto-context-menu-list__item-dce_paste', function () {
        dcePasteFromClipboard(false, this);
    });
});

jQuery(window).on('load', function () {

    // At this time, the new API is only available in Chrome 66+ and only copying/pasting of plain text is supported.
    // Note that the API only works when served over secured domains (https) or localhost and when the page is the browser's currently active tab.
    // https://googlechrome.github.io/samples/async-clipboard/
    // https://developers.google.com/web/updates/2018/03/clipboardapi

    // COPY
    jQuery(document).on('click', '.tooto-context-menu-list__item-copy, .tooto-context-menu-list__item-copy_all_content', function () {
        var transferData = tootoCommon.storage.get('clipboard');
        if (!transferData) {
            transferData = tootoCommon.storage.get('transfer');
        }
        var jTransferData = JSON.stringify(transferData);
        if (navigator.clipboard) {
            navigator.clipboard.writeText(jTransferData)
                    .then(() => {
                        // Success!
                    })
                    .catch(err => {
                        console.log('Something went wrong', err);
                    });
        } else {
            // fallback
            dceAddCopyPasteFallback(jTransferData);
            var clipboard = new ClipboardJS('#dce_copy_paste_btn');
            jQuery('#dce_copy_paste_btn').trigger('click');
            jQuery('#dce_copy_paste').remove();
            // Success!
        }
    });

});

function dceAddPasteAction(groups, element) {
    var transferGroup = _.findWhere(groups, { name: 'clipboard' });
    if (!transferGroup) {
        transferGroup = _.findWhere(groups, { name: 'transfer' });
    }
    if (!transferGroup) {
            return groups;
    }
    jQuery.each(groups, function( index, value ) {
        if (value.name == 'transfer' || value.name == 'clipboard' || value.name == 'paste') {
            groups[index].actions.push(
                {
                    name: 'dce_paste',
                    title: 'Paste from Clipboard',
                    callback: function () {
                        pasteAction = _.findWhere(transferGroup.actions, { name: 'paste' });
                        return dcePasteFromClipboard(pasteAction);
                    }
                },
                {
                    name: 'dce_paste_style',
                    title: 'Paste Style from Clipboard',
                    callback: function () {
                        // do your stuff, element should be available here
                        pasteStyleAction = _.findWhere(transferGroup.actions, { name: 'pasteStyle' });
                        return dcePasteFromClipboard(pasteStyleAction);
                    }
                }
            );
        }
    });

    return groups;
}

// PASTE
function dcePasteFromClipboard(pasteAction, pasteBtn) {
    var cid = jQuery(pasteBtn).closest('.tooto-context-menu').attr('data-cid');
    if (!cid || cid == 'undefined') {
        cid = dce_model_cid;
    }
    if (dceCanJsPaste()) {
        navigator.clipboard.readText()
                .then(text => {
                    // `text` contains the text read from the clipboard
                    dcePasteAction(text, pasteAction, pasteBtn, cid);
                })
                .catch(err => {
                    // maybe user didn't grant access to read from clipboard
                    console.log('Something went wrong', err);
                });
    } else {
        jQuery(pasteBtn).closest('.tooto-context-menu').hide()
        dceAddCopyPasteFallback('', 'paste', cid, pasteAction, pasteBtn);
        jQuery('#dce_copy_paste__textarea').select();
        document.execCommand("paste");
        var text = jQuery('#dce_copy_paste_textarea').val();
        if (text) {
            jQuery('#dce_copy_paste__btn').trigger('click');
        }
    }
    return true;
}

function dceAddCopyPasteFallback(value = '', action = 'copy', cid, pasteAction, pasteBtn) {
    if (jQuery('#dce_copy_paste').length) {
        jQuery('#dce_copy_paste').attr('data-cid', cid);
        jQuery('#dce_copy_paste__textarea').val('');
    } else {
        jQuery('#tooto-preview-responsive-wrapper').append('<div id="dce_copy_paste" class="tooto-context-menu" data-cid="'+cid+'"></div>');
        jQuery('#dce_copy_paste').append('<p><b>DIRECT Paste is not supported</b>, to continue <b>MANUALLY Paste</b> saved content in the below Textarea and <b>click PASTE</b></p>');
        jQuery('#dce_copy_paste').append('<textarea id="dce_copy_paste__textarea" placeholder="Paste HERE">'+value+'</textarea>');
        jQuery('#dce_copy_paste').append('<button id="dce_copy_paste__btn" data-clipboard-action="'+action+'" data-clipboard-target="#dce_copy_paste__textarea"><span class="color-dce icon icon-dyn-logo-dce pull-right ml-1"></span> PASTE</button>');
        jQuery('#dce_copy_paste').append('<a id="dce_copy_paste__close" href="#"><i class="eicon-close"></i></a>');
    }
    jQuery('#dce_copy_paste__textarea').select();
    jQuery('#dce_copy_paste__btn').off();
    jQuery('#dce_copy_paste__btn').on('click', function() {
        var text = jQuery('#dce_copy_paste__textarea').val();
        dcePasteAction(text, pasteAction, pasteBtn, jQuery('#dce_copy_paste').attr('data-cid'));
    });
    jQuery('#dce_copy_paste__close').on('click', function() {
        jQuery('#dce_copy_paste').remove();
    });
}

function dcePasteAction(text, pasteAction, pasteBtn, cid) {
    if (isJson(text)) {
        var transferData = JSON.parse(text);
            tootoCommon.storage.set('clipboard', transferData); // >= 2.8
            tootoCommon.storage.set('transfer', transferData); // <= 2.7

            if (pasteAction) {
                if (!pasteAction.callback()) {
                    // not working on PasteStyle action...so fallback
                    if (cid && cid != 'undefined') {
                        var pasteBtnSelector = '.tooto-context-menu[data-cid='+cid+'] .tooto-context-menu-list__item-'+pasteAction.name;
                        var iFrameDOM = jQuery("iframe#tooto-preview-iframe").contents();
                        iFrameDOM.find('.tooto-element[data-model-cid='+cid+']').trigger('contextmenu');
                        //pasteAction.callback()
                        jQuery('.tooto-context-menu[data-cid='+cid+']').hide();
                        setTimeout(function() {
                            jQuery(pasteBtnSelector).trigger('click');
                        }, 100);

                    }
                }
            } else {
                jQuery(pasteBtn).prev().trigger('click');
            }
        jQuery('#dce_copy_paste').remove();
    } else {
        alert('Invalid Element saved in Clipboard:\r\n------------------\r\n' + text);
    }
}

function dceCanJsPaste() {
    return navigator.clipboard && typeof navigator.clipboard.readText === "function" && ( location.protocol == 'https:' || location.hostname == 'localhost' || location.hostname == '127.0.0.1' );
}
