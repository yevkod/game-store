import React from 'react'

export const GenreItemsView = ({ genre }) => {
    return (
        <div className='bg-gray-500 rounded-xl p-2 break-all hover:scale-105 hover:bg-gray-400 cursor-pointer transition-all'>
            <span className='text-white'>{genre}</span>
        </div>
    )
}
