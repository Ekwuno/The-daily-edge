export async function onRequest({ request, params, env }) {
	try {
        const { commentid, operation } = params;
				let id = env.Learning_DurableObjects.idFromName(commentid); // Create a new unique ID
				let stub = env.Learning_DurableObjects.get(id);
				return stub.fetch(request);
            // console.log(typeof(commentid)) 
        // return new Response(JSON.stringify(commentid, operation));
    } catch (error) {
        return new Response(error.message, console.log(env) ,{
            status: 500,
            error: error.message,
        });

        
    }

    // return new Response(JSON.stringify(env));
// return new Response(JSON.stringify({params}));
}
