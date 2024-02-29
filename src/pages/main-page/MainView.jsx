import React from 'react'
import { GAMES } from '../../services/api/api';
import { CardView } from '../../components/Card/CardView';

export const MainView = () => {

  return (
    <div className='bg-black min-h-screen pt-[90px] pb-[90px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-xl gap-12 max-w-[90rem] mx-auto'>
        {GAMES.map((item) => (
          <div>
            <CardView item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
