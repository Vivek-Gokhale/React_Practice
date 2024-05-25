import { useSelector } from "react-redux";

const Display = ()=>{
    const { counterVal } = useSelector((store) => store.counter);
    
    return <center>
        <h2>
        Counter value : {counterVal}
    </h2>
        </center>
}
export default Display;