import React from "react"
import List from "./List"
import InputField from "./InputField"

function Grocerylist (props) {
    return (
        <div className='grocery-list'>
            <h1>Boodschappenlijst</h1>
            <InputField click={props.addClick} />
            <List 
                list={props.list}
                onClick={props.onClick}
            />
           
        </div>
    )
}
  

export default Grocerylist
// Grocerylist = okay
