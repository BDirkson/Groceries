import React, {Component} from "react"
import ListItem from "./ListItem"

class List extends Component {
    render() {
        const listItems = this.props.list
            .map(item =>
                <ListItem
                    key={item.id}
                    item={item}
                    onClick={this.props.onClick}
                />)
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default List
// List= okay