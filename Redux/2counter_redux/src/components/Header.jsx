import { useDispatch } from "react-redux";
import Input from "./Input";
const Header = ()=>{
    let inVal = 0
    
    const dispatch = useDispatch();
    const handleIncrement = ()=>{
        dispatch({type : "INCREMENT"});

    }
    const handleDecrement = ()=>{
        dispatch({type : "DECREMENT"});
    }
    const handleAddition = ()=>{
        dispatch({type : "ADDITION", payload:{
            inValue : parseInt(inVal)
        }});
    }
    const handleSubstraction = ()=>{
        dispatch({type : "SUBSTRACTION", payload:{
            inValue : parseInt(inVal)
        }});
    }
    const handleOnChange = (val)=>{
        inVal = val;
    }
    const handlePrivacyToggle = ()=>{
        dispatch({type : "PRIVACY"})
    }

    return <>
        <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Counter APP</h1>
    <div class="col-lg-6 mx-auto">
      <Input handleOnChange={handleOnChange}></Input>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-success btn-lg px-4 gap-3" onClick={handleIncrement}>+1</button>
        <button type="button" class="btn btn-danger btn-lg px-4" onClick={handleDecrement}>-1</button>
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={handleAddition} >Addition</button>
        <button type="button" class="btn btn-primary btn-lg px-4" onClick={handleSubstraction}>Substract</button>
        <button type="button" class="btn btn-primary btn-lg px-4" onClick={handlePrivacyToggle}>Privacy Toggle</button>
      </div>
    </div>
  </div>
    </>
}
export default Header;