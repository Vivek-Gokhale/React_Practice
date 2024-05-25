import Button from "./Button";
const ButtonsContainer = ({btnContent, handleOnClick})=>{
    console.log(btnContent);
    return <>
        {btnContent.map((item) =>(<Button value={item} handleOnClick={handleOnClick}></Button>))}
    </>
}
export default ButtonsContainer;