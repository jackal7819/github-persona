import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiUserPlus, FiUsers } from 'react-icons/fi';
import { VscGist, VscRepo } from 'react-icons/vsc';
import { useQuery } from '@tanstack/react-query'

import Item from './Item';
import { getPersona } from '../services/githubFetch'

const Info = ({ queryPersona }) => {
	const { data, isPending, isError } = useQuery({
		queryKey: ['githubPersona', queryPersona],
		queryFn: () => getPersona(queryPersona),
	});
	const { public_repos, followers, following, public_gists } = data || {};
	
	const items = [
		{
			id: 1,
			icon: <VscRepo className='icon' />,
			label: 'repos',
			value: public_repos,
			color: 'pink',
		},
		{
			id: 2,
			icon: <FiUsers className='icon' />,
			label: 'followers',
			value: followers,
			color: 'green',
		},
		{
			id: 3,
			icon: <FiUserPlus className='icon' />,
			label: 'following',
			value: following,
			color: 'purple',
		},
		{
			id: 4,
			icon: <VscGist className='icon' />,
			label: 'gists',
			value: public_gists,
			color: 'yellow',
		},
	];
	
	return (
		<section className='section'>
			<Wrapper className='section-center'>
				{items.map((item) => {
					return <Item key={item.id} {...item} />;
				})}
			</Wrapper>
		</section>
	);
};

Info.propTypes = {
	queryPersona: PropTypes.string.isRequired,
};

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 1rem 2rem;
	@media (min-width: 640px) {
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	}
	.item {
		border-radius: var(--radius);
		padding: 1rem 2rem;
		background: var(--clr-white);
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: 3rem;
		align-items: center;
		span {
			width: 3rem;
			height: 3rem;
			display: grid;
			place-items: center;
			border-radius: 50%;
		}
		.icon {
			font-size: 1.5rem;
		}
		h3 {
			margin-bottom: 0;
			letter-spacing: 0;
		}
		p {
			margin-bottom: 0;
			text-transform: capitalize;
		}
		.pink {
			background: #ffe0f0;
			color: #da4a91;
		}
		.green {
			background: var(--clr-primary-10);
			color: var(--clr-primary-5);
		}
		.purple {
			background: #e6e6ff;
			color: #5d55fa;
		}
		.yellow {
			background: #fffbea;
			color: #f0b429;
		}
	}
`;

export default Info;
