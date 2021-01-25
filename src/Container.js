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
                { id: 1, title: "Peer", amount: 1 },
                { id: 2, title: "Yoghurt", amount: 1 }
            ]
        }
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
    this.handleClickhoppingCart = this.handleClickhoppingCart.bind(this)
    this.handleClickGroceryAdd = this.handleClickGroceryAdd.bind(this)
    this.handleClickShoppingCartEmpty = this.handleClickShoppingCartEmpty.bind(this)
}

handleClickGroceryItem = (title) => {
    console.log (title)
    if (title !== undefined && title !== null && title.length > 0) {
        this.setState(prevState => {
            console.log('item')
            const shoppingListItems = [...prevState.shoppingListItems]
            const shoppingListItem = shoppingListItems.find(item => {
                return item.title === title
    })
        if (shoppingListItem !== undefined) {
            shoppingListItem.amount++;
            } else {
                shoppingListItems.push({
                    id: shoppingListItems.length + 1,
                    title: title,
                    amount: 1
                })
            }
                return {
                    shoppingListItems: shoppingListItems
                }
            })
        }
    }

handleClickhoppingCart = (title) => {
    console.log (title)
}

handleClickGroceryAdd(title) {
    if (title !== undefined && title !== null && title.length > 0) {
        this.setState(prevState => {
            console.log('add')
            const groceryItems = [...prevState.groceryItems]
            groceryItems.push({
                id: groceryItems.length + 1,
                title: title
            })
        return {
            groceryItems: groceryItems
            }
        })
    }
}


// add is okay
// lege array
handleClickShoppingCartEmpty() {
    this.setState(() => {
        return {
            shoppingListItems: []
                }
            })
        }
// empty is okay
    render (){
        return (
            <div className="Container">
  
                <Grocerylist 
                    className="Grocery-list"
                    list={this.state.groceryItems}
                    onClick={this.handleClickGroceryItem}
                    addClick={this.handleClickGroceryAdd}
                    />
                <ShoppingCart 
                    className="Shopping-card"
                    list={this.state.shoppingListItems}
                    onClick={this.handleClickGroceryItem}
                    emptyClick={this.handleClickShoppingCartEmpty}
                    />
                
            </div>
          )
    }
}

export default Container

// container = checken
// addClick = handleClickGroceryAdd
// emtpyClick = handleClickShoppingCartEmpty
// onClick = handleClickGroceryItem