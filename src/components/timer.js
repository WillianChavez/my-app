import React from 'react'

export default class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
        }
    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }

    // life cycle methods
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div>
                <h1>Timer</h1>
                <p>Time: {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}
