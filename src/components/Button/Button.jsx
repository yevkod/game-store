import React from "react";

export const Button = ({ text, className = '', ...rest }) => {
    return (
        <div>
            <button className={`flex bg-blue-500 hover:bg-blue-600 active:bg-blue-700 hover:scale-105 transition-all px-7 w-full items-center py-4 justify-around text-white rounded-full font-medium text-[12px] uppercase ${className}`} {...rest}>
                <span>{text}</span>
            </button>
        </div>
    )
}