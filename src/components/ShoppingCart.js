import React from "react"
import List from "./List"

function ShoppingCart ( props ) {
    return (
        <div className='shoppnig-card'>
            <h1>Winkelmand</h1>
            <List list={props.list} />
        </div>
    )
}

export default ShoppingCart

// of {...props} na <List 