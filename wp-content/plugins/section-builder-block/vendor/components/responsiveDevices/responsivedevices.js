import { Button } from '@wordpress/components';
const GutResponsiveDevices = ({ label, value, onChange }) => {
	return (
		<div className="gut__devices gut__margin">
			<div className="gut__label">{label}</div>
			<div className="gut__btns">
				<Button
					onClick={() => onChange('desktop')}
					isSmall={true}
					isPressed={value === 'desktop'}
				>
					<span className="dashicons dashicons-desktop"></span>
				</Button>
				<Button
					onClick={() => onChange('tablet')}
					isSmall={true}
					isPressed={value === 'tablet'}
				>
					<span className="dashicons dashicons-tablet"></span>
				</Button>
				<Button
					onClick={() => onChange('smartphone')}
					isSmall={true}
					isPressed={value === 'smartphone'}
				>
					<span className="dashicons dashicons-smartphone"></span>
				</Button>
			</div>
		</div>
	);
};
export default GutResponsiveDevices;
