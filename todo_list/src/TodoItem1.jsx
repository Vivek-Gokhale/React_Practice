import './TodoItem.css';

import { RiChatDeleteLine } from "react-icons/ri";
function TodoItem1({todoName, todoDate, itemNo, onDeleteItem})
{
  const handleDelete = (evt)=>{
    onDeleteItem(evt.target.id);
  }
    return <div class="container">
  <div class="row">
    <div class="col-sm style">
    {todoName}
    </div>
    <div class="col-sm style">
      {todoDate}
    </div>
    <div class="col-sm style">
    <button type="button" class="btn btn-danger btn-lg" id={itemNo} onClick={handleDelete}><RiChatDeleteLine /></button>
    </div>
  </div>
 </div> 


    
}
export default TodoItem1;