import style from './inputField.module.css';
const InputField = ({displayField, handleOnChange})=>{
    return <>
     <input type="text" className={style.inField + ' form-control'} id="inputField" aria-describedby="emailHelp" value={displayField}></input>
    </>
}
export default InputField;