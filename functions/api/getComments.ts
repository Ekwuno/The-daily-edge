export const onRequestGet: ({ env:Env }) => Promise<Response> = async ({ env }) => {
	try {
		const value = await env.comment_db.list();
		const comments = await Promise.all(
			value.keys.map(async (key) => {
				const comment = await env.comment_db.get(key.name);
				return JSON.parse(comment);
			})
		);
		return new Response(JSON.stringify(comments), {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error:any) {
		return new Response(error.message, {
			status: 500,
		});
	}
}
