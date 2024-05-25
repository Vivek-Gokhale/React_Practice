import { useSelector } from "react-redux";

const Display = ()=>{
    const counter = useSelector((store) => store.counter);
    
    return <center>
        <h2>
        Counter value : {counter}
    </h2>
        </center>
}
export default Display;