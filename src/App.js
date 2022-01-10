import React from 'react'
import Button from './components/button.js'
import Counter from './components/counter.js'
import Timer from './components/timer.js'
import './styles/App.css'
export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Hello, world!</h1>
                <p>This is my first React app.</p>
                <Timer />
                <Timer />
                <Counter />
                <Button text="Click me" />
                <Button text="Double Click me" />
            </div>
        )
    }
}
