import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../Button/Button';
import { deleteItemFromCart, setItemInCart } from '../../store/cart/reducer';

export const BuyGame = ({ gameItem }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === gameItem.id);

    const handleBuyClick = (e) => {
        e.stopPropagation();
        isItemInCart ? dispatch(deleteItemFromCart(gameItem.id)) : dispatch(setItemInCart(gameItem));
    }

    return (
        <div className='flex items-center gap-5'>
            <div className='text-white font-bold text-[20px]'>
                <span>{gameItem.price} $</span>
            </div>
            <Button text={`${isItemInCart ? 'Remove from cart' : 'Add to cart'}`} className={`${isItemInCart ? 'bg-gray-500 hover:bg-gray-600 active:bg-gray-700' : ''}  text-[14px]`} onClick={handleBuyClick} />
        </div>
    )
}
