import React, { useState } from "react";

export default function Counter() {

    const { quanity, setQuantity } = useState(1)

    const decrement = (value) => {
        return value -= 1
    }

    const increment = (value) => {
        return value += 1
    }

    return (
        <div className="flex flex-wrap flex-col w-1/2 max-h-full bg-white content-center md:w-screen">
            <div className="flex items-center justify-center">
                <button
                    className="px-3 w-12 h-12 appearance-none bg-none text-4xl  outline-none border-2 border-solid border-transparent text-purple-600 pb-4 cursor-pointer bg-purple-600/[0.1] rounded-sm transition-all hover:border-2 hover:border-solid  hover:border-purple-600/[0.4] focus:outline-2"
                    aria-label="Decrement value"
                    onClick={() => decrement(quanity)}
                >
                    -
                </button>
                <span className="text-7xl pl-10 pr-10  mt-2 text-purple-600">
                    {quanity}
                </span>
                <button
                    className="pl-3 pr-3 w-12 h-12 appearance-none bg-none text-4xl  outline-none border-2 border-solid border-transparent text-purple-600 pb-4 cursor-pointer bg-purple-600/[0.1] rounded-sm transition-all hover:border-2 hover:border-solid  hover:border-purple-600/[0.4] focus:outline-2"
                    aria-label="Increment value"
                    onClick={() => increment(quanity)}
                >
                    +
                </button>
            </div>
        </div>

    );
}