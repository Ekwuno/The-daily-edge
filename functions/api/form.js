export async function onRequestPost({ request, env }) {
	try {
		const response = await request.json();
		const uuid = crypto.randomUUID();
		const form = JSON.stringify({ uuid, ...response }, null, 2);

		await env.comment_store.put(uuid, form, {
			metadata: { createdAt: new Date() },
		});
		return new Response(response, {
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
		});
	} catch (err) {
		return new Response('This does not work Obinna', {
			status: 400,
			error: err,
		});
	}
}
