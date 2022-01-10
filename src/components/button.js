import React from 'react'
import '../styles/button.css'
export default class Button extends React.Component {
    // utlizando bind

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(message, event) {
        this.showMessage(message)
        console.dir(event.target.textContent)
    }

    showMessage(message) {
        console.log('The message: ', message)
    }

    // Campos publicos
    // handleClick = (message, event) => {
    //     console.log(message)
    //     console.dir(event.target.textContent)
    // }

    render() {
        return (
            <>
                {/* los parametros de los componentes se pasan como props en el constructor
                    <Button text="Click me" />
                    los parametros como event se pasan automaticamente utlizando bind} */}
                <button className="button" onClick={this.handleClick.bind(this, 'hola')}>
                    {this.props.text}
                </button>
            </>
        )
    }
}
