import React from 'react'
import Button from './components/button.js'
import Counter from './components/counter.js'
import Timer from './components/timer.js'
import Toggle from './components/toggle.js'
import List from './components/list.js'
import './styles/App.css'
export default class App extends React.Component {
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
                <Button text="Click me" />
                <Button text="Double Click me" />
                <Counter />
                <Timer />
                <Timer />
                <Toggle />
                <List numbers={numbers} />
            </div>
        )
    }
}
