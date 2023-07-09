import router from '@tooto/router';
import SiteEditorPromotion from './pages/promotion';
import NotFound from './pages/not-found';

export default class SiteEditor {
	constructor() {
		this.saveTemplateTypesToCache();

		router.addRoute( {
			path: '/site-editor/promotion',
			component: SiteEditorPromotion,
		} );

		router.addRoute( {
			path: '/site-editor/*',
			component: NotFound,
		} );
	}

	saveTemplateTypesToCache() {
		const types = this.getTypes();
		tootoCommon.ajax.addRequestCache( {
			unique_id: 'app_site_editor_template_types',
		}, types );
	}

	getTypes() {
		return [
			{
				type: 'header',
				icon: 'eicon-header',
				title: __( 'Header', 'tooto' ),
				urls: {
					thumbnail: tootoAppConfig.assets_url + '/images/app/site-editor/header.svg',
				},
				tooltip_data: {
					title: __( 'What is a Header Template?', 'tooto' ),
					content: __( 'The header template allows you to easily design and edit custom WordPress headers so you are no longer constrained by your theme’s header design limitations.', 'tooto' ),
					tip: __( 'You can create multiple headers, and assign each to different areas of your site.', 'tooto' ),
					docs: 'https://go.tooto.com/app-theme-builder-header/',
					video_url: 'https://www.youtube.com/embed/HHy5RK6W-6I',
				},
			},
			{
				type: 'footer',
				icon: 'eicon-footer',
				title: __( 'Footer', 'tooto' ),
				urls: {
					thumbnail: tootoAppConfig.assets_url + '/images/app/site-editor/footer.svg',
				},
				tooltip_data: {
					title: __( 'What is a Footer Template?', 'tooto' ),
					content: __( 'The footer template allows you to easily design and edit custom WordPress footers without the limits of your theme’s footer design constraints', 'tooto' ),
					tip: __( 'You can create multiple footers, and assign each to different areas of your site.', 'tooto' ),
					docs: 'https://go.tooto.com/app-theme-builder-footer/',
					video_url: 'https://www.youtube.com/embed/xa8DoR4tQrY',
				},
			},
			{
				type: 'single-page',
				icon: 'eicon-single-page',
				title: __( 'Single Page', 'tooto' ),
				urls: {
					thumbnail: tootoAppConfig.assets_url + '/images/app/site-editor/single-page.svg',
				},
				tooltip_data: {
					title: __( 'What is a Single Page Template?', 'tooto' ),
					content: __( 'A single page template allows you to easily create the layout and style of pages, ensuring design consistency across all the pages of your site.', 'tooto' ),
					tip: __( 'You can create multiple single page templates, and assign each to different areas of your site.', 'tooto' ),
					docs: 'https://go.tooto.com/app-theme-builder-page/',
					video_url: 'https://www.youtube.com/embed/_y5eZ60lVoY',
				},
			},
			{
				type: 'single-post',
				icon: 'eicon-single-post',
				title: __( 'Single Post', 'tooto' ),
				urls: {
					thumbnail: tootoAppConfig.assets_url + '/images/app/site-editor/single-post.svg',
				},
				tooltip_data: {
					title: __( 'What is a Single Post Template?', 'tooto' ),
					content: __( 'A single post template allows you to easily design the layout and style of posts, ensuring a design consistency throughout all your blog posts, for example.', 'tooto' ),
					tip: __( 'You can create multiple single post templates, and assign each to a different category.', 'tooto' ),
					docs: 'https://go.tooto.com/app-theme-builder-post/',
					video_url: 'https://www.youtube.com/embed/8Fk-Edu7DL0',
				},
			},
			{
				type: 'archive',
				icon: 'eicon-archive',
				title: __( 'Archive', 'tooto' ),
				urls: {
					thumbnail: tootoAppConfig.assets_url + '/images/app/site-editor/archive.svg',
				},
				tooltip_data: {
					title: __( 'What is an Archive Template?', 'tooto' ),
					content: __( 'An archive template allows you to easily design the layout and style of archive pages - those pages that show a list of posts (e.g. a blog’s list of recent posts), which may be filtered by terms such as authors, categories, tags, search results, etc.', 'tooto' ),
					tip: __( 'If you’d like a different style for a specific category, it’s easy to create a separate archive template whose condition is to only display when users are viewing that category’s list of posts.', 'tooto' ),
					docs: 'https://go.tooto.com/app-theme-builder-archive/',
					video_url: 'https://www.youtube.com/embed/wxElpEh9bfA',
				},
			},
			{
				type: 'search-results',
				icon: 'eicon-search-results',
				title: __( 'search results page', 'tooto' ),
				urls: {
					thumbnail: tootoAppConfig.assets_url + '/images/app/site-editor/search-results.svg',
				},
				tooltip_data: {
					title: __( 'What is a Search Results Template?', 'tooto' ),
					content: __( 'You can easily control the layout and design of the Search Results page with the Search Results template, which is simply a special archive template just for displaying search results.', 'tooto' ),
					tip: __( 'You can customize the message if there are no results for the search term.', 'tooto' ),
					docs: 'https://go.tooto.com/app-theme-builder-search-results/',
					video_url: 'https://www.youtube.com/embed/KKkIU_L5sDo',
				},
			},
			{
				type: 'product',
				icon: 'eicon-single-product',
				title: __( 'Product', 'tooto' ),
				urls: {
					thumbnail: tootoAppConfig.assets_url + '/images/app/site-editor/product.svg',
				},
				tooltip_data: {
					title: __( 'What is a Single Product Template?', 'tooto' ),
					content: __( 'A single product template allows you to easily design the layout and style of WooCommerce single product pages, and apply that template to various conditions that you assign.', 'tooto' ),
					tip: __( 'You can create multiple single product templates, and assign each to different types of products, enabling a custom design for each group of similar products.', 'tooto' ),
					docs: 'https://go.tooto.com/app-theme-builder-product/',
					video_url: 'https://www.youtube.com/embed/PjhoB1RWkBM',
				},
			},
			{
				type: 'products',
				icon: 'eicon-products',
				title: __( 'Products Archive', 'tooto' ),
				urls: {
					thumbnail: tootoAppConfig.assets_url + '/images/app/site-editor/products.svg',
				},
				tooltip_data: {
					title: __( 'What is a Products Archive Template?', 'tooto' ),
					content: __( 'A products archive template allows you to easily design the layout and style of your WooCommerce shop page or other product archive pages - those pages that show a list of products, which may be filtered by terms such as categories, tags, etc.', 'tooto' ),
					tip: __( 'You can create multiple archive product templates, and assign each to different categories of products. This gives you the freedom to customize the appearance for each type of product being shown.', 'tooto' ),
					docs: 'https://go.tooto.com/app-theme-builder-products-archive/',
					video_url: 'https://www.youtube.com/embed/cQLeirgkguA',
				},
			},
			{
				type: 'error-404',
				icon: 'eicon-error-404',
				title: __( '404 page', 'tooto' ),
				urls: {
					thumbnail: tootoAppConfig.assets_url + '/images/app/site-editor/error-404.svg',
				},
				tooltip_data: {
					title: __( 'What is a 404 Page Template?', 'tooto' ),
					content: __( 'A 404 page template allows you to easily design the layout and style of the page that is displayed when a visitor arrives at a page that does not exist.', 'tooto' ),
					tip: __( 'Keep your site\'s visitors happy when they get lost by displaying your recent posts, a search bar, or any information that might help the user find what they were looking for.', 'tooto' ),
					docs: 'https://go.tooto.com/app-theme-builder-404/',
					video_url: 'https://www.youtube.com/embed/ACCNp9tBMQg',
				},
			},
			];
	}
}
