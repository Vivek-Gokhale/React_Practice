import { Link } from "react-router-dom";

const Sidebar = ()=>{
    return <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "280px"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span class="fs-4">Post me</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <Link  id="home" to="/" class="nav-link text-white"  aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </Link>
      </li>
      <li>
        <Link id="createPost" to="/create-post" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Create Post
        </Link>
      </li>
      
    </ul>
  </div>
}
export default Sidebar;