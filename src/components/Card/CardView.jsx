import React, { useEffect, useState } from 'react'
import { GenreItemsView } from '../Genre/GenreItemsView'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../../store/games/reducer';
import { BuyGame } from '../BuyGame/BuyGame';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const CardView = ({ item }) => {
    const [showImg, setShowImg] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleGame = () => {
        dispatch(setCurrentGame(item));
        navigate(`/${item.title}`)
    }

    useEffect(() => {
        if (showImg) {
            const timer = setTimeout(() => {
                setShowImg(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <div key={item.id} className='flex flex-col w-full cursor-pointer p-5 hover:scale-105 transition-all' onClick={handleGame}>
            {showImg ? (
                <Skeleton
                    height={270}
                    className='rounded-xl'
                />
            ) : (
                <>
                    <div className='max-w-[100%] h-full'>
                        <div className={`justify-center h-[230px] bg-no-repeat bg-cover bg-center rounded-t-lg`}
                            style={{ backgroundImage: `url(${item.image})` }}></div>
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
                </>
            )}
        </div>
    )
}
