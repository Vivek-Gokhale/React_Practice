import TodoItem1 from "./TodoItem1";
import { useContext, } from "react";
import { TodoItemsContext } from "./store/todo-item-store";




const TodoItems = ({onDeleteItem})=>{
   const todoItems = useContext(TodoItemsContext);
   return <>
   {todoItems.map((item, index) =>(<TodoItem1 todoName={item.name} todoDate={item.due} itemNo={index} onDeleteItem={onDeleteItem}></TodoItem1>))}
    
   </>
}
export default TodoItems;