export default class Module extends tootoModules.Module {
	onInit() {
		this.assignRenewMenuItemAction();
	}

	assignRenewMenuItemAction() {
		window.addEventListener( 'DOMContentLoaded', () => {
			const link = document.querySelector( 'a[href="tooto_pro_renew_license_menu_link"]' );

			if ( ! link ) {
				return;
			}

			link.addEventListener( 'click', ( e ) => {
				e.preventDefault();

				window.open( 'https://go.tooto.com/wp-menu-renew/', '_blank' );
			} );
		} );
	}
}
