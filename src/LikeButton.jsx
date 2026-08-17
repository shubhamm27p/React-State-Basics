import { useState } from "react";

export default function LikeBtn() {
    let [isliked, setisliked] = useState(false);
    let [clicks, setClicks] = useState(0);
    let toggleLike = () => {
        setisliked(!isliked); 
        setClicks(clicks + 1);
    };

    let likeStyle = { color:"red" };
    return (
        <div>
            <p>Click = {clicks}</p>
            <p onClick={toggleLike}>
                {
                isliked ? (<i className="fa-solid fa-heart" style={likeStyle}></i>                   
                ):(
                <i className="fa-regular fa-heart"></i>) 
             }
        
        </p>  
        </div>
    )
}