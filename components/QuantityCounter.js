import { useState } from "react";

const QuantityCounter = () => {

    const [number, setNumber] = useState(1)

    return (
        <div className="flex flex-wrap flex-col max-h-full content-center">
            <div className="flex items-center justify-center">
                <button
                    className="px-2 w-8 h-8 appearance-none bg-none text-xl outline-none border-2 border-solid border-transparent text-[#224229] pb-4 cursor-pointer bg-[#fcf9f3] rounded-full transition-all hover:border-2 hover:border-solid  hover:border-[#224229]/[0.5] focus:outline-2"
                    aria-label="Decrement value"
                    onClick={() => number != 1 ? setNumber(number - 1) : null}
                >
                    -
                </button>
                <span className="text-3xl pl-5 pr-5  mt-1 text-[#fcf9f3]">
                    {number}
                </span>
                <button
                    className="px-2 w-8 h-8 appearance-none bg-none text-xl outline-none border-2 border-solid border-transparent text-[#224229] pb-4 cursor-pointer bg-[#fcf9f3] rounded-full transition-all hover:border-2 hover:border-solid  hover:border-[#224229]/[0.5] focus:outline-2"
                    aria-label="Increment value"
                    onClick={() => setNumber(number + 1)}
                >
                    +
                </button>
            </div>
        </div>

    );
}
export default QuantityCounter