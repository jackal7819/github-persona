import PropTypes from 'prop-types';

const Item = ({ icon, label, value, color }) => {
	return (
		<article className='item'>
			<span className={color}>{icon}</span>
			<div>
				<h3>{value}</h3>
				<p>{label}</p>
			</div>
		</article>
	);
};

Item.propTypes = {
	icon: PropTypes.element,
	label: PropTypes.string,
	value: PropTypes.number,
	color: PropTypes.string,
};

export default Item;
