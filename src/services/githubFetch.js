const URL = 'https://api.github.com';

export const getRateLimit = async () => {
	const response = await fetch(`${URL}/rate_limit`);
	const data = await response.json();
	return data.rate;
}