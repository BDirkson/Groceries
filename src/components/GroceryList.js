import React from "react"
import List from "./List"

function Grocerylist (props) {
    return (
        <div className='grocery-list'>
            <h1>Boodschappenlijst</h1>
            <List 
                list={props.list}
                onClick={props.onClick}
                 />
        </div>
    )
}
  

export default Grocerylist