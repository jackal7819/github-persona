import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from './Card';
import Followers from './Followers';

const Persona = ({ queryPersona }) => {
	return (
		<section className='section'>
			<Wrapper className='section-center'>
				<Card queryPersona={queryPersona}  />
				<Followers queryPersona={queryPersona} />
			</Wrapper>
		</section>
	);
};

Persona.propTypes = {
	queryPersona: PropTypes.string.isRequired,
};

const Wrapper = styled.section`
	padding-top: 2rem;
	display: grid;
	gap: 3rem 2rem;
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`;

export default Persona;
