import React from 'react'
import '../styles/list.css'

export default class ListItem extends React.Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef()

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.ref.current.classList.toggle('listItem--selected')
    }

    render() {
        return (
            <li className="listItem" ref={this.ref} onClick={this.handleClick}>
                {this.props.value}
            </li>
        )
    }
}
