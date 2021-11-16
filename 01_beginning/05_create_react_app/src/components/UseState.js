import { useState } from 'react'

export const UseState = () => {
    const [count, setCount] = useState(0);
    console.log("UseState Rendered !")
    return (
        <div>
            <button onClick={ () => setCount( c => c + 1)}> Count - {count}</button>
            <button onClick={ () => setCount(0)}>  Reset Count  - {count}</button>
            <button onClick={ () => setCount(5)}> Count - {count}</button>
        </div>
    )
}
