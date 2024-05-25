
import './App.css'
import InputField from './components/InputField';
import Heading from './components/Heading';
import Calculator from './components/Calculator';
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';
function App() {
  const btnContent = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  const title = "Basic Calculator";
  let [displayField, setDisplayField] = useState("");

  const handleOnClick = (evt)=>{
    let newContent = '';
    
    let textContent = evt.target.textContent;
    if(textContent === 'C')
    {
      newContent = '';
      setDisplayField(newContent);
      
    }
    else if(textContent === '=')
    {
      newContent = eval(displayField);
      setDisplayField(newContent);
    }
    else
    {
      newContent = displayField + textContent;

      setDisplayField(newContent);
    }
  }
  const handleOnChange = (evt)=>{
    
    console.log(evt.target.value);
  }
  return (
    <>
    <Calculator>
    <Heading title={title}></Heading>
        <center><InputField displayField={displayField} handleOnChange={handleOnChange}></InputField></center>
        <ButtonsContainer btnContent = {btnContent} handleOnClick={handleOnClick}></ButtonsContainer>
    </Calculator>
    
   
   
    
    </>
  )
}

export default App
