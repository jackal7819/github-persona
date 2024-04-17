const URL = 'https://api.github.com';

export const getRateLimit = async () => {
	const response = await fetch(`${URL}/rate_limit`);
	const data = await response.json();
	return data.rate;
};

export const getPersona = async (persona) => {
	const response = await fetch(`${URL}/users/${persona}`);
	const data = await response.json();
	return data;
};

export const getRepos = async (persona) => {
	const response = await fetch(`${URL}/users/${persona}/repos?per_page=100`);
	const data = await response.json();
	return data;
};

export const getFollowers = async (persona) => {
	const response = await fetch(`${URL}/users/${persona}/followers`);
	const data = await response.json();
	return data;
};
