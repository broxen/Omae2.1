import React from 'react';
import PropTypes from 'prop-types';

const ModificationButton = ({ attName, buttonClass, maxPoints, pointsLeft, modificationFunction, attType, symbol }) => {
	return (
		<td>
			<button
				className={`btn ${buttonClass}`}
				onClick={() => {
					if (pointsLeft > 0) {
						modificationFunction({
							attribute: attName,
							max: maxPoints,
							spend: attType
						});
					}
				}}
			>
				{symbol}
			</button>
		</td>
	);
};

ModificationButton.propTypes = {
	attName: PropTypes.string.isRequired,
	buttonClass: PropTypes.string.isRequired,
	maxPoints: PropTypes.number.isRequired,
	pointsLeft: PropTypes.number,
	modificationFunction: PropTypes.func.isRequired,
	attType: PropTypes.string.isRequired,
	symbol: PropTypes.string.isRequired
};

ModificationButton.defaultProps = {
	pointsLeft: 1
};

export default ModificationButton;
