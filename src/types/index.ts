export interface Comment  {
 user: Partial<User>
 message: string;
 likes: number;
 comments: Comment[]
}


export type Comments = Comment[]

export type Operation = "increment" | "decrement"

export type User = {
    name:string;
    id:number;
    avatar_url:string;
}