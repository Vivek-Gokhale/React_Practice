import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingState from "./LoadingState";
const PostList = ()=>{
    
    

    const {postList, fetching}  = useContext(PostListData); 
    
    return <>
        <br />
        {fetching && <LoadingState></LoadingState>}
        {!fetching && postList.length === 0 && <WelcomeMsg></WelcomeMsg>}
        {!fetching && postList.map((post) => (<Post key={post.id} post={post} />))}
    </>
}
export default PostList;