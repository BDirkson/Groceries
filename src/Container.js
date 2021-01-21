import React, {Component} from "react"
import Grocerylist from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends Component {
    constructor (props) {
        super (props)
        this.state = {
            groceryItems: [
                { id: 1, title: "Brood" },
                { id: 2, title: "Banaan" },
                { id: 3, title: "Appel" },
                { id: 4, title: "Melk" }
            ],
            shoppingListItems: [
                { id: 1, title: "Peer" },
                { id: 2, title: "Yoghurt" }
            ]
        }
    }

    render (){
        return (
            <div className="Container">
  
                <Grocerylist 
                    className="grocery-list"
                    list={this.state.groceryItems}
                    />
                <ShoppingCart 
                    className="grocery-list"
                    list={this.state.shoppingListItems}
                    />
            </div>
          )
    }
}

export default Container

