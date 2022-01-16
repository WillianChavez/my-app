import React from 'react'
import Button from './components/button.js'
import { Counter } from './components/counter.js'
import { Timer } from './components/timer.js'
import Toggle from './components/toggle.js'
import List from './components/list.js'
import { ModalContainer } from './components/modal.js'
import { themes, themeContext, tooglerContext } from './themeContext.js'

import './styles/App.css'
export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            theme: themes.dark,
            toggleTheme: () => {
                this.setState((state) => ({
                    theme: state.theme === themes.dark ? themes.light : themes.dark,
                }))
            },
        }
    }

    render() {
        const numbers = [
            { id: 1, value: 'one' },
            { id: 2, value: 'two' },
            { id: 3, value: 'three' },
            { id: 4, value: 'four' },
            { id: 5, value: 'five' },
            { id: 6, value: 'six' },
        ]
        return (
            <div className="App">
                <h1>Hello, world!</h1>
                <p>This is my first React app.</p>
                <themeContext.Provider value={this.state.theme}>
                    <ModalContainer />

                    <tooglerContext.Provider value={this.state.toggleTheme}>
                        <Toggle />
                    </tooglerContext.Provider>

                    <Button handleClick={() => alert('show message')}>Click me</Button>
                    <Button handleClick={() => alert('show message')}>Double Click</Button>

                    <Counter />

                    <List numbers={numbers} />
                </themeContext.Provider>
                <Timer />
            </div>
        )
    }
}
