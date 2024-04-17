import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';

import Bar3d from './Charts/Bar3d';
import Column3d from './Charts/Column3d';
import Doughnut2d from './Charts/Doughnut2d';
import Pie3d from './Charts/Pie3d';
import { getRepos } from '../services/githubFetch';

const Repos = ({ queryPersona }) => {
	const { data } = useQuery({
		queryKey: ['repos', queryPersona],
		queryFn: () => getRepos(queryPersona),
	});

	const languages = Array.isArray(data) ? data.reduce((total, item) => {
		const { language, stargazers_count } = item || {};
		if (!language) return total;
		if (!total[language]) {
			total[language] = {
				label: language,
				value: 1,
				stars: stargazers_count || 0 ,
			};
		} else {
			total[language] = {
				...total[language],
				value: total[language].value + 1,
				stars: total[language].stars + (stargazers_count || 0),
			};
		}
		return total;
	}, {}) : {};

	const mostUsed = Object.values(languages || {})
		.sort((a, b) => b.value - a.value)
		.slice(0, 6);

	const mostPopular = Object.values(languages || {})
		.sort((a, b) => b.stars - a.stars)
		.map((item) => {
			return { ...item, value: item.stars || 0 };
		})
		.slice(0, 6);

	// let { stars, forks } = data.reduce(
	// 	(total, item) => {
	// 		const { stargazers_count, name, forks } = item;
	// 		total.stars[stargazers_count] = {
	// 			label: name,
	// 			value: stargazers_count,
	// 		};
	// 		total.forks[forks] = { label: name, value: forks };
	// 		return total;
	// 	},
	// 	{
	// 		stars: {},
	// 		forks: {},
	// 	}
	// );

	// stars = Object.values(stars).slice(-5).reverse();
	// forks = Object.values(forks).slice(-5).reverse();
	let stars = [],
		forks = [];

	if (data && Array.isArray(data)) {
		const { stars: starData, forks: forksData } = data.reduce(
			(total, item) => {
				const { stargazers_count, name, forks_count } = item || {};
				if (stargazers_count !== undefined) {
					total.stars[stargazers_count] = {
						label: name,
						value: stargazers_count,
					};
				}
				if (forks_count !== undefined) {
					total.forks[forks_count] = {
						label: name,
						value: forks_count,
					};
				}
				return total;
			},
			{ stars: {}, forks: {} }
		);

		stars = Object.values(starData).slice(-5).reverse();
		forks = Object.values(forksData).slice(-5).reverse();
	}

	return (
		<section className='section'>
			<Wrapper className='section-center'>
				<Pie3d data={mostUsed} />
				<Column3d data={stars} />
				<Doughnut2d data={mostPopular} />
				<Bar3d data={forks} />
			</Wrapper>
		</section>
	);
};

Repos.propTypes = {
	queryPersona: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
	display: grid;
	justify-items: center;
	gap: 2rem;
	@media (min-width: 800px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 1200px) {
		grid-template-columns: 2fr 3fr;
	}

	div {
		width: 100% !important;
	}
	.fusioncharts-container {
		width: 100% !important;
	}
	svg {
		width: 100% !important;
		border-radius: var(--radius) !important;
	}
`;

export default Repos;
