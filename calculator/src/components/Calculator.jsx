import style from './Calculator.module.css';

const Calculator = (props)=>{
   
  console.log(style.borderStyle);
    return <>
        <div className={style.borderStyle}>
        {props.children}

        </div>
    </>
};
export default Calculator;