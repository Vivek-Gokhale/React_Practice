import style from './FoodItem.module.css';



const FoodItem = (props)=>{
    
    return <>
        <ul class="list-group">
        <li key={props.fooditem} className={`list-group-item ${props.bought && 'active'}`} >{props.fooditem}<button type="button" className={style.btnStyle + ' btn btn-info'} onClick={props.handleOnClick}>Buy</button></li>
        
        </ul>
    </>
}
export default FoodItem;