import React from 'react'
import bikeDelivery from "../images/bike-delivery.png"

 const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className='py-2 flex-1 flex flex-col items-start'>
        <div className='flex items-center gap-2 justify-start bg-orange-300'>
          <p>Bike Delivery</p>
          <div className='w-10 h-10 py-2 bg-textWhite rounded-full overflow-hidden'>
            <img src={bikeDelivery} alt="" className='w-full h-full object-contain ' />
          </div>
        </div>
      </div>
      <div className='p-4 bg-primary flex-1'></div>
    </div>
  )
}

export default MainContainer;
