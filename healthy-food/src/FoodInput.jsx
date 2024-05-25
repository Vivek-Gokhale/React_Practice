import style from './FoodInput.module.css';
import AddButton from './AddButton';
const FoodInput = (props)=>{
    return <>
        <input className={style.foodItem} type="text" onKeyDown={props.handleOnKeyDown}/>
        
    </>
}
export default FoodInput;