import React, {Component} from 'react'

class InputField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { value } = event.target
        this.setState({
            title: value
        })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder="Welke boodschappen?">     
                </input>
                <button
                    onClick={() => {
                        this.props.click(this.state.title)
                        this.setState({
                            title: ""
                        })
                    }}>
                    Voeg toe
                </button>
            </div >
        )
    }
}
export default InputField 
// InputField = okay