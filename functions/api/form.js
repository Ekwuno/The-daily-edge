export async function onRequestPost({ request, env }) {
	try {
		const response = await request.json(); // Parse the response as JSON
		const uuid = crypto.randomUUID();
		const formResponse= JSON.stringify({ uuid, ...response }, null, 2);

		await env.comment_store.put(uuid, formResponse, {
			metadata: { createdAt: Date.now() },
		});
		return new Response(formResponse, {
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
		});
	} catch (err) {
		return new Response('Error parsing JSON content', {
			status: 400,
			error: err,
		});
	}
}
