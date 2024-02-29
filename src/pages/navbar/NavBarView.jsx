import React, { useState } from 'react';
import basket from '../../assets/imgs/basket.svg';
import { useNavigate } from 'react-router-dom';
import { CartBlock } from '../../components/CartBlock/CartBlock';
import { calcTotalPrice } from '../../components/helpers/utils';
import { useSelector } from 'react-redux';

export const NavBarView = () => {
    const [cartVisible, setCartVisible] = useState(false);
    const navigate = useNavigate();
    const games = useSelector(state => state.cart.itemsInCart);

    const handleClick = () => {
        navigate('/')
    }

    const handleCart = () => {
        setCartVisible(!cartVisible)
    }

    return (
        <div className='bg-gray-900 fixed z-50 w-[100vw] rounded-b-lg h-[75px]'>
            <div className='flex relative justify-between h-full items-center px-3 md:px-16'>
                <div className='text-[30px] text-white font-bold cursor-pointer hover:scale-105 transition-all' onClick={handleClick}>
                    <span>Game Store</span>
                </div>
                <div className='flex gap-5 items-center cursor-pointer' onClick={handleCart}>
                    <div className='flex hover:scale-105 transition-all'>
                        <img className='w-10' src={basket} alt='basket' />
                    </div>
                    {games.length > 0 && (
                        <div className='text-white relative flex font-bold text-[18px]'>
                            <span>{calcTotalPrice(games)} $</span>
                            <div className='absolute right-[120%] -top-3 w-6 text-white bg-red-500 font-medium rounded-full'>{games.length}</div>
                        </div>
                    )}
                    {cartVisible && (
                        <div className='absolute pt-3 p-2 top-3/4 right-[0.5%] md:right-16 md:max-w-[400px] break-all w-full'>
                            <CartBlock setCartVisible={setCartVisible} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
