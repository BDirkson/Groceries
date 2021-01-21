import React from "react"
import List from "./List"

function Grocerylist (props) {
    return (
        <div className='grocery-list'>
            <h1>Grocery List</h1>
            <List list={props.list} />
        </div>
    )
}


export default Grocerylist