import React from 'react'
import { GenreItemsView } from '../Genre/GenreItemsView'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../../store/games/reducer';
import { BuyGame } from '../BuyGame/BuyGame';

export const CardView = ({ item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleGame = () => {
        dispatch(setCurrentGame(item));
        navigate(`/${item.title}`)
    }

    return (
        <div key={item.id} className='flex flex-col w-full cursor-pointer p-5 hover:scale-105 transition-all' onClick={handleGame}>
            <div className='max-w-[100%]'>
                <img className='max-w-[100%]' src={item.image} alt={item.title} />
            </div>
            <div className='flex flex-col bg-gray-800 p-5 rounded-b-2xl'>
                <div className='text-white text-[20px] font-bold text-left'>
                    <span>{item.title}</span>
                </div>
                <div className='flex flex-col md:flex-row gap-5 pt-5'>
                    {item.genres.map((genre, index) => (
                        <div key={index}>
                            <GenreItemsView genre={genre} />
                        </div>
                    ))}
                </div>
                <div className='flex justify-end items-center gap-3 pt-10'>
                    <BuyGame gameItem={item} />
                </div>
            </div>
        </div>
    )
}
