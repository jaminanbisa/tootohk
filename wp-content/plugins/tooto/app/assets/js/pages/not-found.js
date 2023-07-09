import Page from 'tooto-app/layout/page';

export default function NotFound() {
	const config = {
		title: __( 'Not Found', 'tooto' ),
		className: 'eps-app__not-found',
		content: <h1> { __( 'Not Found', 'tooto' ) } </h1>,
		sidebar: <></>,
	};

	return (
		<Page { ...config } />
	);
}
