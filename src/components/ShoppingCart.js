import React from "react"
import List from "./List"

function ShoppingCart ( props ) {
    return (
        <div className='shopping-cart'>
            <h1>Winkelmand</h1>
            <button 
                onClick={props.emptyClick}>
                Leeg Winkelmand
            </button>
            <List 
                list={props.list}
                onClick={props.onClick}
                 />
            
        </div>
    )
}

export default ShoppingCart

// of {...props} na <List 
// ShoppingCard = okay