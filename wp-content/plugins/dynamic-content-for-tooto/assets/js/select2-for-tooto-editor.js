// SELECT2 everywhere
jQuery(window).on( 'load', function() {
    if (jQuery.fn.select2) {
        if ( window.tootoFrontend ) {
            tootoFrontend.hooks.addAction( 'frontend/element_ready/global', function( $scope ) {
                jQuery('.tooto-control-type-select select').select2();
            } );
        }
        tooto.hooks.addAction( 'panel/open_editor/section', function( panel, model, view ) {
            jQuery('.tooto-control-type-select select').select2();
        } );
        tooto.hooks.addAction( 'panel/open_editor/column', function( panel, model, view ) {
            jQuery('.tooto-control-type-select select').select2();
        } );
        tooto.hooks.addAction( 'panel/open_editor/widget', function( panel, model, view ) {
            jQuery('.tooto-control-type-select select').select2();
        } );
    }
    setInterval(function(){
        if (jQuery.fn.select2) {
            // add navigator element toggle
            jQuery('.tooto-control-type-select select').not('.select2-hidden-accessible').each(function(){
                jQuery(this).select2();
            });
        }
    }, 1000);
});

jQuery(window).load(function() {
    var iFrameDOM = jQuery("iframe#tooto-preview-iframe").contents();

    // add EDIT Template on Context Menu
    iFrameDOM.on('mousedown', '.tooto-editor-active .tooto:not(.tooto-edit-mode)', function(event) {
        if (event.which == 3) {
            var template_id = jQuery(this).data('tooto-id');
            var post_id = iFrameDOM.find('.tooto-editor-active .tooto.tooto-edit-mode').data('tooto-id');
            if (template_id && post_id) {
                setTimeout(function(){
                    var menu = jQuery('.tooto-context-menu:visible');
                    if (menu.length) {
                        menu.find('.tooto-context-menu-list__item-template').remove();
                        var edit_url = window.location.href.replace('post='+post_id, 'post='+template_id);
                        menu.find('.tooto-context-menu-list__item-edit').after('<div class="tooto-context-menu-list__item tooto-context-menu-list__item-template" onclick="window.open(\''+edit_url+'\'); return false;"><div class="tooto-context-menu-list__item__icon"><i class="eicon-edit"></i></div><div class="tooto-context-menu-list__item__title">Edit Template</div></div>');
                    }
                }, 10);
            }
        }
    });

});
