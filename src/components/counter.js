import { useState } from 'react'
import Button from './button'

export function Counter() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <Button handleClick={handleClick}>Counter</Button>
        </div>
    )
}
