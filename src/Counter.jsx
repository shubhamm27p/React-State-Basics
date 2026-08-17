import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function inCount() {
        setCount((currCount) => {
            currCount + 1;
    });
      setCount((currCount) => {
            currCount + 1;
    });
        
      
    }
    return (
        <div> 
            <h3> Count = {count}</h3>
            <button onClick={inCount}>Increase Count!</button>
        </div>
    )
}