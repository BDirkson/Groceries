import React, {Component} from "react"
import ListItem from "./ListItem"

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groceryItems: [
                { id: 1, title: "Brood" },
                { id: 2, title: "Banaan" },
                { id: 3, title: "Appel" },
                { id: 4, title: "Melk" }
            ]
        }
    }
    render() {
        const grocList = this.state.groceryItems.map(item => <ListItem key={item.id} item={item}/>)
        return (
            <div>
                <ul>
                    {grocList}
                </ul>
            </div>
        )    
    }
}
export default List
