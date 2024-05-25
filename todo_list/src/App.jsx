import Heading from "./heading"
import Add from "./Add"
import TodoItems from "./TodoItems";
import { useState } from "react";
import WelcomeMsg from "./WelcomeMsg";

import { useReducer } from "react";

const reducer = (currentItemList, action)=>{
  let newItemList = currentItemList;
  if(action.type === "NEW_ITEM")
  {
    newItemList = [...currentItemList,{name : action.payload.itemName, due : action.payload.dueDate}];
  }
  else if(action.type === "DELETE_ITEM")
  {
    newItemList = [...currentItemList];
    // Remove the item at the specified index
    newItemList.splice(action.payload.idx, 1);
    // Set the state with the new array
   
  }
  return newItemList;

}

function App() {
  
    const [itemList, dispatchItemList] = useReducer(reducer, []);
    // const [itemList, setItemList]  = useState([]);
    const handleNewItem = (itemName, dueDate)=>{

      if(itemName != "" && dueDate != "")
      {
        const addNewItemAction = {
          type : "NEW_ITEM",
          payload : {
            itemName, 
            dueDate
          }
        }
        dispatchItemList(addNewItemAction);
      }
      

      // if(itemName != "" && dueDate != "")
      // {
      //   const newItemList = [...itemList,{name : itemName,
      //     due : dueDate}];
      //     setItemList(newItemList);
      // }
     
    }
    const handleDeleteItem = (idx) => {
      const newItemListAction = {
        type : "DELETE_ITEM",
        payload: {
          idx
        }
      }
      // Create a copy of itemList array
     
    }
  
 

  console.log(itemList);
  return <div>
    <Heading></Heading>
    <br />
    <div className="todo-container">
    <Add onNewItem={handleNewItem}></Add>
    <center><WelcomeMsg todoItems={itemList}></WelcomeMsg></center>
    <TodoItems todoItems={itemList} onDeleteItem={handleDeleteItem}></TodoItems>
    
    
    </div>
   
    </div>
  
}

export default App
