import React from 'react'
import { GenreItemsView } from '../../components/Genre/GenreItemsView'
import { useSelector } from 'react-redux'
import { BuyGame } from '../../components/BuyGame/BuyGame'


export const DetailsView = () => {
    const gameItem = useSelector(state => state.games.currentGame);

    if (!gameItem) return null;

    return (
        <div className='bg-black min-h-screen pt-[120px] p-5 h-full'>
            <div className='flex max-w-[90rem] mx-auto text-white [font-size:_clamp(2em,4vw,45px)] font-bold text-left'>
                <span>{gameItem.title}</span>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[90rem] mx-auto'>
                <div className='flex flex-col order-2 lg:order-1 w-full'>
                    <iframe
                        width='100%'
                        height='80%'
                        frameBorder='0'
                        title='Youtube video player'
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        src={gameItem.video}
                        className='mt-8'
                    />
                </div>
                <div className='flex flex-col order-1 lg:order-2 items-end w-full'>
                    <div className='flex flex-col bg-gray-900 rounded-lg p-5 justify-end lg:max-w-[30rem]'>
                        <div className='hover:scale-105 transition-all'>
                            <img src={gameItem.image} alt={gameItem.title} />
                        </div>
                        <div className='text-white text-left text-[18px] pt-3 font-medium'>
                            <span>
                                {gameItem.description}
                            </span>
                        </div>
                        <div className='text-gray-500 text-[20px] font-medium pt-3 text-left'>
                            <span>Popular tags for this product:</span>
                        </div>
                        <div className='flex flex-col md:flex-row gap-5 pt-5'>
                            {gameItem.genres.map((genre, index) => (
                                <div className='flex flex-row' key={index}>
                                    <GenreItemsView genre={genre} />
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-end items-center gap-3 pt-10'>
                            <BuyGame gameItem={gameItem} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
