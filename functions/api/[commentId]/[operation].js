export async function onRequest({ request, params, env }) {
	try {
        const { commentID, operation } = params;
				let id = env.Learning_DurableObjects.idFromName(commentID); // Create a new unique ID
				let stub = env.Learning_DurableObjects.get(id);
				return stub.fetch(request);
        // return new Response(JSON.stringify(commentId, operation));
    } catch (error) {
        return new Response(error.message, console.log(env) ,{
            status: 500,
            error: error.message,
        });

        
    }

    // return new Response(JSON.stringify(env));
// return new Response(JSON.stringify({params}));
}
