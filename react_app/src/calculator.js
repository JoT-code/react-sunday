import React, {useState} from "react"
import "./calculator.css"
let Calculator = () =>{
    let [ans,setAns] = useState(0)
    let [number,setNumber] = useState(0)
    let [number1,setNumber1] = useState(0)
    let [operator,setOperator] = useState("   ")
    let handleclick0 = () =>{
        setNumber(number*10 + 0)
    }
    let handleclick1 = () =>{
        setNumber(number*10 + 1)
    }
    let handleclick2 = () =>{
        setNumber(number*10 + 2)
    }
    let handleclick3 = () =>{
        setNumber(number*10 + 3)
    }
    let handleclick4 = () =>{
        setNumber(number*10 + 4)
    }
    let handleclick5 = () =>{
        setNumber(number*10 + 5)
    }
    let handleclick6 = () =>{
        setNumber(number*10 + 6)
    }
    let handleclick7 = () =>{
        setNumber(number*10 + 7)
    }
    let handleclick8 = () =>{
        setNumber(number*10 + 8)
    }
    let handleclick9 = () =>{
        setNumber(number*10 + 9)
    }
    let handleclickequal = () =>{
        if (operator === "x"){
            ans = number * number1
            setAns(ans)
            setNumber1(ans)
        }
        else if (operator === "-"){
            ans = number - number1
            setAns(ans)
            setNumber1(ans)
        }
        else if (operator === "/"){
            ans = number / number1
            setAns(ans)
            setNumber1(ans)
        }
        else if (operator === "+"){
            ans = number + number1
            setAns(ans)
            setNumber1(ans)
        }
        setNumber(0)
        
    }
    let handleclickadd = () =>{
        setNumber1(number)
        setOperator("+")
        setNumber(0)
    }
    let handleclickminus = () =>{
        setNumber1(number)
        setOperator("-")
        setNumber(0)
    }
    let handleclickdivide = () =>{
        setNumber1(number)
        setOperator("/")
        setNumber(0)
    }
    let handleclicktimes = () =>{
        setNumber1(number)
        setOperator("x")
        setNumber(0)
    }
    let handleclickdelete = () =>{
        setNumber(Math.floor(number/10))
    }
    let handleclickdecimal = () =>{
        
    }
    let handleclickclear = () =>{
        setAns(0)
        setNumber(0)
        setNumber1(0)
        setOperator("   ")
    }
    return(
        <div>
        <div className = "window">
        {number}{" "}{operator}{" "}{number1}
        <p>{ans}</p>
        </div>
        <div className = "layout">
        <button onClick = {handleclick1} className = "button_number">1</button>
        <button onClick = {handleclick2} className = "button_number">2</button>
        <button onClick = {handleclick3} className = "button_number">3</button>
        <button onClick = {handleclickadd} className = "button_operator">+</button>
        </div>
        <div className = "layout">
        <button onClick = {handleclick4} className = "button_number">4</button>
        <button onClick = {handleclick5} className = "button_number">5</button>
        <button onClick = {handleclick6} className = "button_number">6</button>
        <button onClick = {handleclickminus} className = "button_operator">-</button>
        </div>
        <div className = "layout">
        <button onClick = {handleclick7} className = "button_number">7</button>
        <button onClick = {handleclick8} className = "button_number">8</button>
        <button onClick = {handleclick9} className = "button_number">9</button>
        <button onClick = {handleclicktimes} className = "button_operator">x</button>
        </div>
        <div className = "layout">
        <button onClick = {handleclick0} className = "button_number">0</button>
        <button onClick = {handleclickdivide} className = "button_operator">/</button>
        <button onClick = {handleclickequal} className = "button_operator">=</button>
        <button onClick = {handleclickdelete} className = "delete_button">Delete</button>
        </div>
        <div className = "layout">
        <button onClick = {handleclickdecimal} className = "button_operator">.</button>
        <button onClick = {handleclickclear} className = "delete_button">Clear</button>
        </div>
        
        
        </div>
    )
}
export default Calculator