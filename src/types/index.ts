export interface Comment  {
 user: User;
 uuid: string;
 message: string;
 likes: number;
 isLiked: boolean;
 comments: Comment[]
}


export type Comments = Comment[]

export type Operation = "increment" | "decrement"

export type User = {
    name:string;
    username: string;
    id:number;
    avatar_url:string;
}

export type CreateCommentType = Omit<Comment, "uuid">