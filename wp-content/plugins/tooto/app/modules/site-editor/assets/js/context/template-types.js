export const Context = React.createContext();

import '../../scss/loading.scss';

class TemplateTypesContext extends React.Component {
	static propTypes = {
		children: PropTypes.object.isRequired,
	};

	constructor( props ) {
		super( props );
		this.state = {
			templateTypes: [],
			loading: true,
			error: false,
		};
	}

	componentDidMount() {
		this.getTemplateTypes()
		.then( ( response ) => {
			this.setState( {
				templateTypes: response,
				loading: false,
			} );
		} )
		.fail( ( error ) => {
			this.setState( {
				error: error.statusText ? error.statusText : error,
				loading: false,
			} );
		} );
	}

	getTemplateTypes() {
		return tootoCommon.ajax.load( {
			action: 'app_site_editor_template_types',
		} );
	}

	render() {
		if ( this.state.error ) {
			return <div className="e-loading-wrapper"><h3>{ __( 'Error:', 'tooto' ) } { this.state.error }</h3></div>;
		}

		if ( this.state.loading ) {
			return (
				<div className="tooto-loading">
					<div className="tooto-loader-wrapper">
						<div className="tooto-loader">
							<div className="tooto-loader-boxes">
								<div className="tooto-loader-box" />
								<div className="tooto-loader-box" />
								<div className="tooto-loader-box" />
								<div className="tooto-loader-box" />
							</div>
						</div>
						<div className="tooto-loading-title">{ __( 'Loading', 'tooto' ) }</div>
					</div>
				</div>
			);
		}

		return (
			<Context.Provider value={ this.state }>
				{ this.props.children }
			</Context.Provider>
		);
	}
}

export const TemplateTypesConsumer = Context.Consumer;
export default TemplateTypesContext;
