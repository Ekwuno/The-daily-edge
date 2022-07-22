export async function onRequest({ request, params, env }) {
	try {
        const { e, operation } = params;
				let id = env.Learning_DurableObjects.idFromName(e); // Create a new unique ID
				let stub = env.Learning_DurableObjects.get(id);
				return stub.fetch(request);
        // return new Response(JSON.stringify(commentId, operation));
    } catch (error) {
        return new Response(error.message, {
            status: 500,
            error: error.message,
        });

        
    }
// return new Response(JSON.stringify({params}));
}
