import qs from 'query-string';
import {User} from "types"

// This is a service class that handles the authentication of the user by sending a request to the server with the code.
// and returns a promise that resolves to the user object.
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
		return data as { user: User};
	}

	getUser() {
		const user: string | null= localStorage.getItem('user');
		return user ? JSON.parse(user) as User : null
	}
}

export default new AuthService();
