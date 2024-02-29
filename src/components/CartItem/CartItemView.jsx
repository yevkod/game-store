import React from 'react'
import { useDispatch } from 'react-redux';
import cancel from '../../assets/imgs/cancel.svg';
import { deleteItemFromCart } from '../../store/cart/reducer';


export const CartItemView = ({ title, id, price }) => {
    const dispatch = useDispatch();

    const handleCancelClick = (e) => {
        e.stopPropagation();
        dispatch(deleteItemFromCart(id));
    }

    return (
        <div className='flex justify-between items-center'>
            <div className='max-w-[70%]'>{title}</div>
            <div className='flex gap-3 items-center'>
                <div>{price} $</div>
                <div className='w-3' onClick={handleCancelClick}>
                    <img src={cancel} alt='' />
                </div>
            </div>
        </div>
    )
}
