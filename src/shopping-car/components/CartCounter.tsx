'use client'
import React, { useState } from 'react'

interface Props {
    value?: number
}
export const CartCounter = ({ value = 10 }: Props) => {
    const [count, setCount] = useState(value)
    return (
        <div>
            <span className="text-9xl">{count}</span>
            <div className="flex mr-2">
                <button className="mr-4 flex flex-col items-center bg-gray-500 text-cyan-50 rounded-xl"
                    onClick={() => setCount(count + 1)}>+1</button>
                <button className="mr-4 flex flex-col items-center bg-gray-500 text-cyan-50 rounded-xl"
                    onClick={() => setCount(count - 1)}>-1</button>
            </div>
        </div>
    )
}
