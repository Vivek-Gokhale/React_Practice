import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext([]);


const reducer = (currentItemList, action)=>{
    let newItemList = currentItemList;
    if(action.type === "NEW_ITEM")
    {
      newItemList = [...currentItemList,{name : action.payload.itemName, due : action.payload.dueDate}];
    }
    else if(action.type === "DELETE_ITEM")
    {
      // Create a copy of itemList array
      newItemList = [...currentItemList];
      // Remove the item at the specified index
      newItemList.splice(action.payload.idx, 1);
      // Set the state with the new array
      
    }
    return newItemList;
  
  }

  
const TodoItemsContextProvider = ({children})=>{
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
        payload : {
          idx
        }
      }
      dispatchItemList(newItemListAction);
      
    }
  return (<TodoItemsContext.Provider value={{itemList, handleNewItem, handleDeleteItem}}>
    {children}
  </TodoItemsContext.Provider>);
};
export default TodoItemsContextProvider;