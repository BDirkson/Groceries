import React from "react"

function ListItem(props) {
    const item = props.item
    return (
        <li
            className="list-item"
            key={item.id}
            value={item.title}
            onClick={() => props.onClick(item.title)}
        >
            <div> {item.title} </div>
            <div> {item.amount} </div> 
        </li>
    )
}


export default ListItem

// listItem = okay alleen nog check op amount die per 2 gaat