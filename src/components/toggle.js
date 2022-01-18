import React, { useContext } from 'react'
import { tooglerContext, themeContext } from '../themeContext'
import Button from './button'
export default function Toggle() {
    const tooglerFunction = useContext(tooglerContext)
    const theme = useContext(themeContext)

    const text = theme === 'theme-dark' ? 'Dark' : 'Light'

    return <Button handleClick={tooglerFunction}>{text}</Button>
}
