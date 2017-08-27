import React from 'react';
import PropTypes from 'prop-types';

class ArmorTableRow extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			Rating: isNaN(props.armor.cost) ? '' : null
		};
	}

	render() {
		const {armor, button, mod} = this.props;
		return (
			<tr>
				<td className="armor-button">{button}</td>
				<td className="armor-name">{mod || armor.name}</td>
				<td className="armor-value">{armor.armor}</td>
				<td className="armor-capacity">
					{
						this.state.Rating === null ?
						(armor.currentRating || armor.armorcapacity)
						:
						<input
							type="number"
							className="form-control"
							min="1"
							max={armor.rating}
							placeholder={`1-${armor.rating}`}
						/>
					}
				</td>
				<td className="armor-avail">{armor.avail}</td>
				<td className="armor-cost">{armor.currentCost || armor.cost}</td>
				<td className="armor-ref">{armor.source} p{armor.page}</td>
			</tr>
		);
	}
}

ArmorTableRow.propTypes = {
	armor: PropTypes.shape({
		name: PropTypes.string.isRequired,
		armor: PropTypes.string.isRequired,
		armorcapacity: PropTypes.string.isRequired,
		avail: PropTypes.string.isRequired,
		cost: PropTypes.string.isRequired,
		source: PropTypes.string.isRequired,
		page: PropTypes.string.isRequired,
		rating: PropTypes.string,
		currentCost: PropTypes.number,
		currentRating: PropTypes.number
	}).isRequired,
	button: PropTypes.element.isRequired,
	mod: PropTypes.element
};

ArmorTableRow.defaultProps = {
	armorGear: null,
	mod: null
};

export default ArmorTableRow;
