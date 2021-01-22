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
            {item.title}
            </li>
    )
}


export default ListItem