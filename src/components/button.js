import React from 'react'
import '../styles/button.css'
import { themeContext } from '../themeContext'
export default class Button extends React.Component {
    // utlizando bind

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(message, event) {
        this.showMessage(message)
    }

    showMessage(message) {
        alert(message)
    }

    // Campos publicos
    // handleClick = (message, event) => {
    //     console.log(message)
    //     console.dir(event.target.textContent)
    // }

    render() {
        return (
            <themeContext.Consumer>
                {(theme) => (
                    <button className={`button ${theme}`} onClick={this.handleClick.bind(this, 'hola')}>
                        {this.props.text}
                    </button>
                )}
            </themeContext.Consumer>
        )
    }
}
