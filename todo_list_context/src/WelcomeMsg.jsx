import { useContext } from 'react';
import style from './WelcomeMsg.module.css';
import { TodoItemsContext } from './store/todo-item-store';


const todoItems = useContext(TodoItemsContext);

const WelcomeMsg = ()=>{
    return<>
    {todoItems.length === 0 && <p className={style.msg}>No Task Remaining. Enjoy your Day.</p>}
    </>
}
export default WelcomeMsg;