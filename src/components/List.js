import React, {Component} from "react"
import ListItem from "./ListItem"

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groceryItems: [
                { id: 1, title: "Appels" },
                { id: 2, title: "Pak melk" },
                { id: 3, title: "Pasta" },
                { id: 4, title: "Banaan" }
            ]
        } 
    }   
    //const groceryComponents = groceryItems.map(item => <ListItem key={item.id} title={item}/>)
    render() {
        
        return (
            <div>
                <ul>
               
                </ul>
            </div>
        )
    }
}
export default List

