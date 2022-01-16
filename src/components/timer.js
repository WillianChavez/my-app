import { useState, useEffect } from 'react'

export function Timer() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [time])

    return (
        <div>
            <h1>Timer</h1>
            <p>Time: {time.toLocaleTimeString()}</p>
        </div>
    )
}
