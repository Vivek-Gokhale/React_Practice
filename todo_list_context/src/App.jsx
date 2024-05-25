import Heading from "./heading"
import Add from "./Add"
import TodoItems from "./TodoItems";
import { useState } from "react";
import WelcomeMsg from "./WelcomeMsg";
import { TodoItemsContext } from "./store/todo-item-store";



function App() {
  
  const InitialItemList = [
    ];
    const [itemList, setItemList]  = useState(InitialItemList);
    const handleNewItem = (itemName, dueDate)=>{
      if(itemName != "" && dueDate != "")
      {
        const newItemList = [...itemList,{name : itemName,
          due : dueDate}];
          setItemList(newItemList);
      }
     
    }
    const handleDeleteItem = (idx) => {
      // Create a copy of itemList array
      const newItemList = [...itemList];
      // Remove the item at the specified index
      newItemList.splice(idx, 1);
      // Set the state with the new array
      setItemList(newItemList);
    }
  
  const item = [{name : "buy ghree", dueDate : "today"}];

  console.log(itemList);
  return  <TodoItemsContext.Provider value = {item}>
  <div>
    <Heading></Heading>
    <br />
   
    <div className="todo-container">
    <Add onNewItem={handleNewItem}></Add>
    <center><WelcomeMsg ></WelcomeMsg></center>
    <TodoItems onDeleteItem={handleDeleteItem}></TodoItems>
    
    
    </div>
   
    </div>
    
    </TodoItemsContext.Provider>
  
}

export default App
