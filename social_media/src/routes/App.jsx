
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import CreatePost from '../components/CreatePost';
import PostList from '../components/PostList';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import PostListProvider from '../store/post-list-store';

function App() {
  
  const [selectedTab, setSelectedTab] = useState("Home");
  const handleOnClick = (evt)=>{
    let newSelectedTab = selectedTab;
    if(evt.target.id === "home")
    {
      newSelectedTab = "Home";
    }
    else
    {
      newSelectedTab = "Create Post";
    }
    setSelectedTab(newSelectedTab);
  }
  return (
    <>
    <PostListProvider>
    <div className='block-panel'>
    <Sidebar selectedTab={selectedTab} handleOnClick={handleOnClick}></Sidebar>
    <div className='content-panel'>
    <Header></Header>
    {/* {
      selectedTab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>
    } */}
    <Outlet/>
    <Footer></Footer>
    </div>
    </div>
    </PostListProvider>
    </>
  )
}

export default App
