import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItem from './FoodItem';
import FoodInput from './FoodInput';
import AddButton from './AddButton';

function App() {
 
  
  const handleOnKeyDown = (evt)=>{

    if(evt.key === "Enter")
    {
      let newItem = evt.target.value;
      let newFoodItems = [...foodItems, newItem];
      setFoodItem(newFoodItems);
      evt.target.value = "";
    }
   

  }

  const handleOnChange = (evt)=>{
    
    textToShow = evt.target.value;
    console.log(textToShow);
    setTextToShow(textToShow);
  }

  const handleOnClick = (evt, item)=>{
    let newFoodItems = [...boughItems, item];
    setBoughtItems(newFoodItems);
  }
  // let textToShowArray = useState("Food Item entered by user");
  // let textToShow = textToShowArray[0];
  // let setTextToShow = textToShowArray[1];
  let [textToShow, setTextToShow] = useState("Food Item Entered by User");
  // const foodItems = ["Roti", "Dal", "Chaval",  "Salad", "Dahi"];
  let [foodItems , setFoodItem] = useState(["Roti", "Dal", "Chaval",  "Salad", "Dahi"]);

  let [boughItems, setBoughtItems] = useState([]);
  return (
    <>
      <h1>Heathy Foods</h1>
      <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
      {/* <AddButton handleOnClick={handleOnClick}></AddButton> */}
      {/* <p>{textToShow}</p> */}
      <ul className="list-group">
        {foodItems.map(item=><FoodItem key={item} fooditem={item} bought={boughItems.includes(item)} handleOnClick={(evt)=>handleOnClick(evt,item)}></FoodItem>)}
      </ul>
    </>
  )
}

export default App
