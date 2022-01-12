import React from 'react'
import '../styles/button.css'
import { themeContext, tooglerContext } from '../themeContext'
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
            <themeContext.Consumer>
                {(theme) => (
                    <tooglerContext.Consumer>
                        {(toggleTheme) => (
                            <button className={`button ${theme}`} onClick={toggleTheme}>
                                toogle backgorund color
                            </button>
                        )}
                    </tooglerContext.Consumer>
                )}
            </themeContext.Consumer>
        )
    }
}
