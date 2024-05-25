import style from './Button.module.css';
const Button = ({value, handleOnClick})=>{
    return <>
    <button type="button" className={style.myBtn + ' btn btn-outline-dark'} onClick={handleOnClick}>{value}</button>
    </>
}
export default Button;