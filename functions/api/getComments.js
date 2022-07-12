export async function onRequestGet({ request, env }) {
	try {
		const value = await env.comment_store.list();
		const comments = await Promise.all(
			value.keys.map(async (key) => {
				const comment = await env.comment_store.get(key.name);
				return JSON.parse(comment);
			})
		);
		return new Response(JSON.stringify(comments), {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		return new Response(error.message, {
			status: 500,
			error: error.message,
		});
	}
}
