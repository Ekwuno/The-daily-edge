class CommentServices {
    async getComments() {
        const response = await fetch("/api/getComments");
        const data = await response.json();
        return data;
      }

      // The code below sends a POST request to the server to add a comment to the KV store which
      // is then displayed in the CommentList component. 
    async postComment(comment){
        const response = await fetch("/api/form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(comment)
        });
        //Parse the response as JSON
        const data = await response.json();
        console.log("data", data); //This is the comment that was added to the KV store
        return data; //This is the comment that was added to the KV store

        
    }

    async updateComment(comment){
        const response = await fetch("/api/updateComment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(comment)
        });
        //Parse the response as JSON
        const data = await response.json();
        return data;
    }

    async updateLikesByID(commentID, operation){
        const response = await fetch(`https://worker-durable.obinnacodes.workers.dev/${commentID}/${operation}`, {
			method: 'POST'
		});

        return response;
    }

}

export default new CommentServices();