import React from 'react'
import '../styles/button.css'

// export default function Counter() {
//     const [count, setCount] = React.useState(0)

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)} className="button">
//                 Counter
//             </button>
//         </div>
//     )
// }

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.handleClick} className="button">
                    Counter
                </button>
            </div>
        )
    }
}
