import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import Loading from './Loading';
import { getRateLimit } from '../services/githubFetch';

const Search = () => {
	const [persona, setPersona] = useState('');

	const {
		data: rateLimit,
		isPending,
		isError,
	} = useQuery({ queryKey: ['rateLimit'], queryFn: getRateLimit });

	if (isPending) {
		return <Loading />;
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (persona) {
			window.location = `https://github.com/${persona}`;
			setPersona('');
		}
	};
	return (
		<section className='section'>
			<Wrapper className='section-center'>
				{isError && (
					<ErrorWrapper>
						<p>sorry, you have exceeded you hourly rate limit!</p>
					</ErrorWrapper>
				)}
				<form onSubmit={handleSubmit}>
					<div className='form-control'>
						<MdSearch />
						<input
							type='text'
							value={persona}
							placeholder='search github persona'
							onChange={(e) => setPersona(e.target.value)}
						/>
						{rateLimit?.remaining > 0 && (
							<button type='submit'>search</button>
						)}
					</div>
				</form>
				<h3>
					requests : {rateLimit?.remaining} / {rateLimit?.limit}
				</h3>
			</Wrapper>
		</section>
	);
};

const Wrapper = styled.div`
	position: relative;
	display: grid;
	gap: 1rem 1.75rem;
	@media (min-width: 768px) {
		grid-template-columns: 1fr max-content;
		align-items: center;
		h3 {
			padding: 0 0.5rem;
		}
	}
	.form-control {
		background: var(--clr-white);
		display: grid;
		align-items: center;
		grid-template-columns: auto 1fr auto;
		column-gap: 0.5rem;
		border-radius: 5px;
		padding: 0.5rem;
		input {
			border-color: transparent;
			outline-color: var(--clr-grey-10);
			letter-spacing: var(--spacing);
			color: var(--clr-grey-3);
			padding: 0.25rem 0.5rem;
		}
		input::placeholder {
			color: var(--clr-grey-3);
			text-transform: capitalize;
			letter-spacing: var(--spacing);
		}
		button {
			border-radius: 5px;
			border-color: transparent;
			padding: 0.25rem 0.5rem;
			text-transform: capitalize;
			letter-spacing: var(--spacing);
			background: var(--clr-primary-5);
			color: var(--clr-white);
			transition: var(--transition);
			cursor: pointer;
			&:hover {
				background: var(--clr-primary-8);
				color: var(--clr-primary-1);
			}
		}

		svg {
			color: var(--clr-grey-5);
		}
		input,
		button,
		svg {
			font-size: 1.3rem;
		}
		@media (max-width: 800px) {
			button,
			input,
			svg {
				font-size: 0.85rem;
			}
		}
	}
	h3 {
		margin-bottom: 0;
		color: var(--clr-grey-5);
		font-weight: 400;
	}
`;

const ErrorWrapper = styled.article`
	position: absolute;
	width: 90vw;
	top: 0;
	left: 0;
	transform: translateY(-100%);
	text-transform: capitalize;
	p {
		color: #F472B6;
		font-weight: 700;
		letter-spacing: var(--spacing);
	}
`;

export default Search;
