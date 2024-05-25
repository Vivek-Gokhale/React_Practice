import TodoItem1 from "./TodoItem1";
const TodoItems = ({todoItems, onDeleteItem})=>{
   return <>
   {todoItems.map((item, index) =>(<TodoItem1 todoName={item.name} todoDate={item.due} itemNo={index} onDeleteItem={onDeleteItem}></TodoItem1>))}
    
   </>
}
export default TodoItems;