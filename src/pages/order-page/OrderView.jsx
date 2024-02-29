import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { setCurrentGame } from '../../store/games/reducer';
import cancel from '../../assets/imgs/cancel.svg'
import { deleteItemFromCart } from '../../store/cart/reducer';
import { Button } from '../../components/Button/Button';

export const OrderView = () => {
  const games = useSelector(state => state.cart.itemsInCart);
  const { randomId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (item) => {
    dispatch(setCurrentGame(item));
    navigate(`/${item.title}`);
    console.log('game.title:', item.title);
  };

  const handleCancelClick = (e, id) => {
    e.stopPropagation();
    dispatch(deleteItemFromCart(id));
  }

  const handleNavigateHome = () => {
    navigate('/');
  }

  return (
    <div className='bg-black pt-[120px] pb-[90px] min-h-screen'>
      <div className='max-w-[70rem] mx-auto'>
        {games.length > 0 && (
          <div className='text-white text-[20px] p-5 font-bold text-left '>Your order #{randomId}</div>
        )}
        {games.length > 0 ? games.map((item) => (
          <div>
            <div key={item.id} className='grid grid-cols-1 lg:grid-cols-2 text-white p-6 gap-10 cursor-pointer' onClick={() => handleNavigate(item)}>
              <div className='md:max-w-[50%] order-2 md:order-1'>
                <div>
                  <img src={item.image} alt='' />
                </div>
              </div>
              <div className='flex items-center order-1 md:order-2 justify-between md:max-w-[50%]'>
                <div className='text-[20px] font-bold'>
                  <span>{item.title}</span>
                </div>
                <div className='text-[18px] font-bold'>
                  <span>{item.price} $</span>
                </div>
                <div className='flex w-3' onClick={(e) => handleCancelClick(e, item.id)}>
                  <img src={cancel} alt='' />
                </div>
              </div>
            </div>
          </div>
        )) : (
          <div className='flex flex-col text-white font-bold text-[30px]'>
            <span>You have no items in your cart!</span>
            <Button text='Buy new items' className='max-w-[200px] mx-auto mt-20' onClick={handleNavigateHome} />
          </div>
        )}
      </div>
    </div>
  )
}
