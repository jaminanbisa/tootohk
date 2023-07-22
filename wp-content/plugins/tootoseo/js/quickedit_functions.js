jQuery(document).on( 'click', '.visibility-notice', function() {

    jQuery.ajax({
        url: ajaxurl,
        data: {
            action: 'aioseo_dismiss_visibility_notice'
        }
    });

});

jQuery(document).on( 'click', '.yst_notice', function() {

    jQuery.ajax({
        url: ajaxurl,
        data: {
            action: 'aioseo_dismiss_yst_notice'
        }
    });

});

jQuery(document).on( 'click', '.woo-upgrade-notice', function() {

    jQuery.ajax({
        url: ajaxurl,
        data: {
            action: 'aioseo_dismiss_woo_upgrade_notice'
        }
    });

});

jQuery(document).on( 'click', '.sitemap_max_urls_notice', function() {

    jQuery.ajax({
        url: ajaxurl,
        data: {
            action: 'aioseo_dismiss_sitemap_max_url_notice'
        }
    });

});


function tootoseo_ajax_edit_meta_form( post_id, meta, nonce ) {
	var uform = jQuery('#tootoseo_'+meta+'_' + post_id);
	var post_title = jQuery('#tootoseo_label_' + meta + '_' + post_id).text();
	var element = uform.html(); var input;
	input = '<textarea id="tootoseo_new_'+meta+'_' + post_id + '" style="font-size:13px;width:100%;float:left;position:relative;z-index:1;" rows=4 cols=32>'  + post_title + '</textarea>';
	input += '<label style="float:left">';
	input += '<a class="tootoseo_mpc_SEO_admin_options_edit" href="javascript:void(0);" id="tootoseo_'+meta+'_save_' + post_id + '" >';
	input += '<img src="' + tootoseoadmin.imgUrl+'accept.png" border="0" alt="" title="'+meta+'" /></a>';
	input += '<a class="tootoseo_mpc_SEO_admin_options_edit" href="javascript:void(0);" id="tootoseo_'+meta+'_cancel_' + post_id + '" >';
	input += '<img src="' + tootoseoadmin.imgUrl+'delete.png" border="0" alt="" title="'+meta+'" /></a>';
	input += '</label>';
	uform.html( input );
	uform.attr( "class", "tootoseo_mpc_admin_meta_options aio_editing" );
	jQuery('#tootoseo_'+meta+'_cancel_' + post_id).click(function() {
		uform.html( element );
		uform.attr( "class", "tootoseo_mpc_admin_meta_options" );
	});
	jQuery('#tootoseo_'+meta+'_save_' + post_id).click(function() {
		var new_meta = jQuery( '#tootoseo_new_'+meta+'_' + post_id ).val();
		handle_post_meta( post_id, new_meta, meta, nonce );
	});
}

function handle_post_meta( p, t, m, n ) {
	jQuery("div#tootoseo_"+m+"_"+p).fadeOut('fast', function() {
		var loading = '<label class="tootoseo_'+m+'_loading">';
		loading += '<img style="width:20px;margin-right:5px;float:left" align="absmiddle" ';
		loading += 'src="'+tootoseoadmin.imgUrl+'activity.gif" border="0" alt="" title="'+m+'" /></a>';
		loading += '</label><div style="float:left">Please wait…</div>';
		jQuery("div#tootoseo_"+m+"_"+p).fadeIn('fast', function() {
			var tootoseo_sack = new sack(tootoseoadmin.requestUrl);
			tootoseo_sack.execute = 1;
			tootoseo_sack.method = 'POST';
			tootoseo_sack.setVar( "action", "tootoseo_ajax_save_meta");
			tootoseo_sack.setVar( "post_id", p );
			tootoseo_sack.setVar( "new_meta", t );
			tootoseo_sack.setVar( "target_meta", m );
			tootoseo_sack.setVar( "_inline_edit", jQuery('input#_inline_edit').val() );
			tootoseo_sack.setVar( "_nonce", n );
			tootoseo_sack.onError = function() {alert('Ajax error on saving title'); };
			tootoseo_sack.runAJAX();
		});
		jQuery("div#tootoseo_"+m+"_"+p).html(loading);
		jQuery("div#tootoseo_"+m+"_"+p).attr( "class", "tootoseo_mpc_admin_meta_options" );

	});
}
