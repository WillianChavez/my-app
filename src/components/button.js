import React from 'react'
import '../styles/button.css'
import { themeContext } from '../themeContext'
export default class Button extends React.Component {
    // utlizando bind

    // Campos publicos
    // handleClick = (message, event) => {
    //     console.log(message)
    //     console.dir(event.target.textContent)
    // }

    render() {
        return (
            <themeContext.Consumer>
                {(theme) => (
                    <button className={`button ${theme}`} onClick={this.props.handleClick}>
                        {this.props.children}
                    </button>
                )}
            </themeContext.Consumer>
        )
    }
}
