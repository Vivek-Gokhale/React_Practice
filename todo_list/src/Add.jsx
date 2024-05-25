import { useRef, useState } from 'react';
import style from './Add.module.css';
import { MdOutlineAddComment } from "react-icons/md";
function Add({onNewItem})
{

  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoItemElement = useRef();
  const duedateElement = useRef();
  // const handleNameChange = (evt)=>{
  //   setTodoName(evt.target.value);

  // }
  // const handleDateChange = (evt)=>{
  //   setDueDate(evt.target.value);
  // }
  const handleOnClick = (evt)=>{
    evt.preventDefault();
    const todoName = todoItemElement.current.value;
    const dueDate = duedateElement.current.value;
    onNewItem(todoName, dueDate);
    duedateElement.current.value = "";
    todoItemElement.current.value = "";
  }
    return <div class="container">
  <form action='' onSubmit={handleOnClick} class="row">
    <div class="col-sm">
    <input type="text" placeholder="Enter Text Here" ref={todoItemElement} />
    </div>
    <div class="col-sm">
      <input type="date" ref={duedateElement} />
    </div>
    <div class="col-sm">
    <button type="submit" class={style.btnAdd + ' btn btn-success btn-lg'}  ><MdOutlineAddComment /></button>
    </div>
  </form>
 </div> 


    
}
export default Add;