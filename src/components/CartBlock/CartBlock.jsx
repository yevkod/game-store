import React from 'react'
import { useSelector } from 'react-redux'
import { calcTotalPrice } from '../helpers/utils';
import { Button } from '../Button/Button';
import { CartItemView } from '../CartItem/CartItemView';
import { useNavigate } from 'react-router-dom';


export const CartBlock = ({ setCartVisible }) => {
  const games = useSelector(state => state.cart.itemsInCart);
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.stopPropagation();
    setCartVisible(false);
    navigate(`/order`)
  }


  return (
    <div className='bg-gray-700 w-full text-[14px] md:text-[16px] rounded-lg p-5 min-w-[300px]'>
      <div className='flex flex-col gap-3 text-left text-white font-bold'>
        {games.length > 0 ? games.map((game) => (
          <>
            <CartItemView title={game.title} id={game.id} price={game.price} />
          </>
        )) : 'Your cart is empty'}
      </div>
      {games.length > 0 ? (
        <div className='border-t-2 mt-10 border-gray-200'>
          <div className='flex text-[18px] font-medium justify-between text-white pt-3'>
            <span>Total:</span>
            <span>{calcTotalPrice(games)} $</span>
          </div>
          <div className='pt-5'>
            <Button text='Make order' className='text-[16px]' onClick={handleNavigate} />
          </div>
        </div>
      ) : null}
    </div>
  )
}
