import React from 'react'
import '../styles/button.css'
export default class Toggle extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isToggleOn: false,
        }
    }

    handleClick = () => {
        this.setState((state) => ({
            isToggleOn: !state.isToggleOn,
        }))
    }

    render() {
        return (
            <div>
                <button className="button" onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}
