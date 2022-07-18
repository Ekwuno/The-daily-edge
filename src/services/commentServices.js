class CommentServices {
    async getComments() {
        const response = await fetch("/api/getComments");
        const data = await response.json();
        return data;
      }

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
        return data;
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

}

export default new CommentServices();