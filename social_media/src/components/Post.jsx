import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostList } from "../store/post-list-store";
const Post = ({post})=>{
    
    const {deletePost} = useContext(PostList);
    return <div class="card post-card" style={{width: "30rem"}}>
    
    <div class="card-body">
      <h5 class="card-title">{post.title}
     
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>{deletePost(post.id)}}>
    <MdDeleteForever />
    
  </span>

      </h5>
      <p class="card-text">{post.body}</p>
      
      {
        post.tags.map((tag)=>(<span  key={tag} class="badge text-bg-primary hashtag">{tag}</span>))
      }
    </div>
    <div class="alert alert-success " role="alert">
  This Post has be reacted by {post.reaction} peoples
</div>
  </div>
}
export default Post;