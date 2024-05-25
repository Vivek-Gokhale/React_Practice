import style from './WelcomeMsg.module.css';

const WelcomeMsg = ({todoItems})=>{
    return<>
    {todoItems.length === 0 && <p className={style.msg}>No Task Remaining. Enjoy your Day.</p>}
    </>
}
export default WelcomeMsg;