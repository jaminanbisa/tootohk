export default function tootoLoading( props ) {
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
				<div className="tooto-loading-title">{ props.loadingText }</div>
			</div>
		</div>
	);
}

tootoLoading.propTypes = {
	loadingText: PropTypes.string,
};

tootoLoading.defaultProps = {
	loadingText: __( 'Loading', 'tooto' ),
};
