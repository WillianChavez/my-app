import React from 'react'
import { tooglerContext } from '../themeContext'
import Button from './button'
export default class Toggle extends React.Component {
    render() {
        return <tooglerContext.Consumer>{(toggleTheme) => <Button handleClick={toggleTheme}>Toggle Theme</Button>}</tooglerContext.Consumer>
    }
}
