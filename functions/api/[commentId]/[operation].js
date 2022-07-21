export async function onRequest({ request, params, env }) {
	const { commentId, operation } = params;
	let id = env.Learning_DurableObjects.idFromName(commentID); // Create a new unique ID
	let stub = env.Learning_DurableObjects.get(id);
	return stub.fetch(request);
}
