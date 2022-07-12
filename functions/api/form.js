export async function onRequestPost ({request}){
    try {
        const response = request.json()
        console.log(response)
        
    } catch (err) {
        return new Response("This does not work Obinna",{
            status:400,
            error:err
        })
    }
    return new Response("new yello")
}