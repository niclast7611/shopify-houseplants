import React from 'react'

export default function ProductOptions({ name, values, selectedOptions, setOptions }) {
    // console.log("values", selectedOptions)
    // console.log("name", name)
    return (
        <fieldset className='mt-3'>
            <legend className="text-xl font-semibold">{name}</legend>
            <div className='inline-flex items-center flex-wrap'>
                {
                    values.map(value => {

                        // creates a unique id
                        const id = `options${name}-${value}`
                        const checked = selectedOptions[name] === value
                        // console.log("selectedOptions", selectedOptions)

                        return (
                            // creates the form content 
                            <label key={id} htmlFor={id}>
                                {/* all the variant options match with the label */}
                                <input
                                    className='sr-only'
                                    type='radio'
                                    id={id}
                                    name={`options-${name}`}
                                    value={value}
                                    checked={checked}
                                    onChange={() => setOptions(name, value)}
                                />
                                {/* <div className={`p-2 mt-3 text-lg rounded-full block cursor-pointer mr-3 ${checked ? "text-[#fcf9f3] bg-[#224229]" : "text-white bg-[#64aa85]"}`
                                }> */}
                                <div className={`p-2 mt-3 text-lg rounded-full block cursor-pointer mr-3 text-[#fcf9f3]
                                ${value === 'Stone' ? 'bg-gray-400'
                                        : value === 'Clay' ? 'bg-stone-500'
                                            : value === 'Charcoal' ? 'bg-black'
                                                : value === 'Slate' ? 'bg-slate-500'
                                                    : value === 'Basalt' ? 'bg-zinc-600'
                                                        : value === 'Terracotta' ? 'bg-yellow-800'
                                                            : value === 'Indigo' ? 'bg-sky-900'
                                                            : 'bg-[#224229]'
                                    } 
                                ${checked ? "border-[#64aa99] border-2" : null}`
                                }>
                                    <span className='px-2 '>{value}</span>
                                </div>
                            </label>
                        )
                    })
                }
            </div >
        </fieldset >
    )
}
