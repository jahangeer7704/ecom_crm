import React from 'react'
import AsideLink from './AsideLink'
import SimpleSlider from './Animations/SimplSlider'
import FlashSales from './FlashSales'
import TimeDisplay from './TimeDisplay'
import Categories from './Categories'
function Home1() {
  return (
    <div className='grid grid-cols-12 gap-x-2 gap-y-4'>
      <AsideLink />
      <div className='col-span-9  '>
        <SimpleSlider />
      </div>
      <div className='col-span-12 '>
        <FlashSales />
        <Categories/>
      
      </div>
    </div>
  )
}

export default Home1