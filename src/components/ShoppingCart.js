import React from "react"
import List from "./List"

function ShoppingCart (props) {
    return (
        <div className='shoppnig-card'>
            <h1>Shopping Card</h1>
            <List list={props.list} />
        </div>
    )
}

export default ShoppingCart
