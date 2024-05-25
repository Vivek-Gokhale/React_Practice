import { useEffect, useState } from "react";

function CurrentTime()
{
    const [time, setTime] = useState(new Date());
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=>{
            clearInterval(intervalId);
        }
    }, []);

   
    return <div>
        <p className="text-center">Current Time : {time.toLocaleDateString()}-{" "}{time.toLocaleTimeString()}</p>
    </div>
}
export default CurrentTime;