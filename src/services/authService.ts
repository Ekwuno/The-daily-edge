import qs from 'query-string';
import {User} from "types"
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
		return data as User;
	}

	getUser() {
		const user: string | null= localStorage.getItem('user');
		return user ? JSON.parse(user) as User : null
	}
}

export default new AuthService();
