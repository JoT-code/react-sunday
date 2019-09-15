import React, {useState} from "react"

let Button = ()=>{
    let [times, setState] = useState(0)
    let handleclickAdd = () =>{
        setState(times + 1)
    }
    let handleclickMinus = () =>{
        setState(times - 1)
    }
    let handleclickReset = () =>{
        setState(0)
    }
    return(
        <div>
        <p>you clicked {times} times</p>
        <button onClick = {handleclickAdd}>Plus 1</button>
        <button onClick = {handleclickMinus}>Minus 1</button>
        <button onClick = {handleclickReset}>Reset</button>
        </div>
    )
}
export default Button