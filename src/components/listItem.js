import React, { useRef } from 'react'
import '../styles/list.css'

export default function ListItem({ children }) {
    const ref = useRef()

    const handleClick = () => {
        ref.current.classList.toggle('listItem--selected')
    }

    return (
        <li className="listItem" ref={ref} onClick={handleClick}>
            {children}
        </li>
    )
}
