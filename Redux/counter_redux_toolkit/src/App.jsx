
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Display from './components/Display';

import PrivacyMsg from './components/PrivacyMsg';
import { useSelector } from 'react-redux';
function App() {

const {privacyVal} = useSelector((store) => store.privacy);
  return (
    <>
      <Header></Header>
      
      {privacyVal ? <PrivacyMsg/> : <Display/>}
    </>
  )
}

export default App
