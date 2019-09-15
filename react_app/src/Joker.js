import React from "react"


let Card =(props) =>{
    return(
    <div>
    <img src={props.picture} width = "150" alt="..."/>
    <div>
    <h5>{props.name ? props.name : "Nameless"}</h5>
    <p> Age : {props.age ? props.age: "Unknown"}</p>
    <p>Traits</p>
    <ul>
    {props.traits.map((elem)=>{
        return (<li key={elem[0]}>{elem[0]} : {elem[1] ? elem[1] : "Unknown"}</li>)
    })}
    </ul>
    </div>
    </div>
    )}
export default Card