import {createContext, useReducer, useState, useEffect } from "react";



export const PostList = createContext(
    {
        
    postList: [],
    addPost: ()=>{},
    deletePost: ()=>{},
    fetching:false
    }
);




const postListReducer = (currPostList, action)=>{

    
    let newPostList = currPostList;
    if(action.type === 'DELETE_POST')
    {
        newPostList = currPostList.filter(post => post.id !== action.payload.postId);
    }
    else if(action.type === 'ADD_INITIAL_POSTS')
    {
        newPostList = action.payload.posts;
    }
    else if(action.type === 'ADD_POST')
    {
        newPostList = [...currPostList,{
            id:action.payload.id,
            title:action.payload.title,
            body:action.payload.body,
            reactions:action.payload.reactions,
            userId:action.payload.userId,
            tags:action.payload.tags,
        }];
    }
    else {}

    return newPostList;
}
const PostListProvider = ({children})=>{
    const [postList, dispatchPostList] = useReducer(postListReducer, []);
    const addPost = (userId, title, body, reactions, tags)=>{
        dispatchPostList({
            type:"ADD_POST",
            payload: {
                id:Date.now(),
                title,
                body,
                reactions,
                userId,
                tags,
            }
        })
    }

    const deletePost = (postId)=>{
        console.log(postId);
        dispatchPostList({
            type:"DELETE_POST",
            payload:{
                postId,
            }
        });
    }

    const addInitialPosts = (posts)=>{
        dispatchPostList({
            type:"ADD_INITIAL_POSTS",
            payload:{
                
                posts,
            }
            
        })
    }
    const [fetching, setFetching]  = useState(false);

    useEffect( ()=>{
        const controller = new AbortController();
        const signal = controller.signal;
        async function fetchData(){
           
            setFetching(true);
            const response = await fetch('https://dummyjson.com/posts',{signal});
            const data = await response.json();
            console.log(data.posts);
            addInitialPosts(data.posts);
            setFetching(false);
        }
        fetchData();

        return ()=>{
            console.log("cleanup useeffect");
            controller.abort();
        }

    },[]);

    return <PostList.Provider value={{postList, addPost, deletePost, fetching}}>{children}</PostList.Provider>

};

export default PostListProvider;