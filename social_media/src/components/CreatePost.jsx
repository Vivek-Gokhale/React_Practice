import { useContext } from "react";
import { PostList } from "../store/post-list-store";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const CreatePost = ()=>{
    const {addPost} = useContext(PostList);
    const navigate = useNavigate();
    const userIdElement = useRef();
    const titleElement = useRef();
    const bodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handleOnSubmit = (evt)=>{
        evt.preventDefault();
        const userId = userIdElement.current.value;
        const title = titleElement.current.value;
        const body = bodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(" ");

        userIdElement.current.value = "";
        titleElement.current.value = "";
        bodyElement.current.value = "";
        reactionsElement.current.value = "";
        tagsElement.current.value = "";
        addPost(userId, title, body, reactions, tags);
        navigate("/");

    }
return <form className="create-post" onSubmit={handleOnSubmit}> 
<div class="form-group ">
  <label for="userId">User ID</label>
  <input type="text" ref={userIdElement} class="form-control" id="userId" placeholder="Enter yout user id"/>
</div>
<div class="form-group ">
  <label for="title">Post Title</label>
  <input type="text" ref={titleElement} class="form-control" id="title" placeholder="how are you filling today"/>
</div>

<div class="form-group ">
  <label for="title">Post Content</label>
  <textarea type="text" ref={bodyElement} rows="4" class="form-control" id="body" placeholder="Tell more about it"/>
</div>

<div class="form-group ">
  <label for="reactions">reactions</label>
  <input type="text" ref={reactionsElement} class="form-control" id="reaction" placeholder="how many people reacted"/>
</div>

<div class="form-group ">
  <label for="tags">Tags</label>
  <input type="text"  ref={tagsElement} class="form-control" id="tags" placeholder="Please enter tags in space seperated"/>
</div>
<br/>


<button type="submit" class="btn btn-primary">Post</button>
</form>
}
export default CreatePost;