import styled from 'styled-components';
import loginImg from '../assets/login.svg';
import { useAuth0 } from '@auth0/auth0-react';
// import Loading from '../components/Loading'

const Login = () => {
	const { loginWithRedirect, isLoading} = useAuth0();
	
	// if (isLoading)
	// 	return (
	// 		<Wrapper>
	// 			<Loading />
	// 		</Wrapper>
	// 	);
	
	return (
		<Wrapper>
			<div className='container'>
				<img src={loginImg} alt='github persona' />
				<h1>github persona</h1>
				<button className='btn' onClick={loginWithRedirect}>
					login / sign up
				</button>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	min-height: 100vh;
	display: grid;
	place-items: center;
	.container {
		width: 90vw;
		max-width: 600px;
		text-align: center;
	}
	h1 {
		margin-bottom: 1.5rem;
	}
	img {
		margin-bottom: 2rem;
	}
`;

export default Login;
