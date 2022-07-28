import qs from 'query-string';

class AuthService {
	async loginViaGithub() {
		const parsedQuery = qs.parseUrl(window.location.href);
		const response = await fetch('/api/code', {
			method: 'POST',
			body: JSON.stringify({
				code: parsedQuery.query.code,
				state: parsedQuery.query.state,
			}),
			headers: { 'Content-Type': 'application/json' },
		});
		const data = await response.json();
		return data;
	}

	getUser() {
		var user = localStorage.getItem('user');
		return JSON.parse(user);
	}
}

export default new AuthService();
