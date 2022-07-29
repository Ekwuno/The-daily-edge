import qs from 'query-string';

export const onRequestPost:({ request:Request, env:Env }) => Promise<Response> = async ({ request, env }) => {
	try {
		const body = await request.json();
		const token = await exchangeCodeForToken(body.code, env);
		const user = await fetchUser(token, env);
		const formattedUser = await formatUserResponse(user);

		await env.kv_userDatabase.put(
			`${user.id}`,
			JSON.stringify({ user, token })
		);

		return new Response(JSON.stringify({ user: formattedUser }), {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		return new Response(JSON.stringify({ error }));
	}
}

async function exchangeCodeForToken(code:any, env:any) {
	const TokenURL = env.TOKEN_ENDPOINT;
	const oAuthQueryParams = {
		grant_type: 'authorization_code',
		redirect_url: env.REDIRECT_URL,
		client_id: env.CLIENT_ID,
		client_secret: env.CLIENT_SECRET,
		code,
	};

	const res = await fetch(TokenURL, {
		body: JSON.stringify(oAuthQueryParams),
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	});

	const data = await res.text();
	const parsedData = qs.parse(data);
	console.log(parsedData.access_token);
	return parsedData.access_token;
}

async function fetchUser(token:any, env:any) {
	const userURL = env.RESOURCE_ENDPOINT + 'user';
	const res = await fetch(userURL, {
		headers: {
			Authorization: `token ${token}`,
			'User-Agent': 'Mozilla/5.0', // Add user agent for GitHub API when using workers
		},
	});

	const data = await res.json();
	console.log(data);
	return data;
}

async function formatUserResponse(user:any) {
	return {
		name: user.name,
		id: user.id,
		avatar_url: user.avatar_url,
	};
}
