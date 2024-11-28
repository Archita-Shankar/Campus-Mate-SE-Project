import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/mens_kurta'
import { stationery } from '../../../Data/stationery'
import { clothes } from '../../../Data/clothes'
import ShopPage from '../../ShopPage/ShopPage'
import Faculty from '../../Faculty/faculty'
import UpcomingEvents from '../../UpcomingEvents.jsx/UpcomingEvents'
const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 felx flex-col justify-centre px-5 lg:px-10'>
            <HomeSectionCarousel data={clothes} sectionName={"Clothes"}/>
            <HomeSectionCarousel data={stationery} sectionName={"Stationery"}/>
            <ShopPage/>
            <Faculty/>
            <UpcomingEvents/>
        </div>
    </div>

    
  )
}

export default HomePage