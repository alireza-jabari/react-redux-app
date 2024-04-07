import {api} from "../api";

type post={
    userId:number,
    id:number,
    title:string,
    body:string
}

const postApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPosts:builder.query<post[],void>({
            query:()=>'/posts',
        })
    }),
    overrideExisting: false,
})


export const {useGetPostsQuery}=postApi;