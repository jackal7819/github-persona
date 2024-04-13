import styled from 'styled-components';
import loginImg from '../assets/login.svg';
const Login = () => {
	return (
		<Wrapper>
			<div className='container'>
				<img src={loginImg} alt='github persona' />
				<h1>github persona</h1>
				<button className='btn'>login</button>
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
