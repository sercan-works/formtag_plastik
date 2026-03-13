import React from 'react'
import Navbar from '../componets/Navbar/navbar'
import SmallFooter from '../componets/Footer/smallFooter'
import Switcher from '../componets/switcher'
import FoodSlider from '../componets/foodSlider'
import HeroSlider from '../componets/foodBlog/heroSlider'
import LatestBlog from '../componets/foodBlog/latestBlog'

import VitrinProducts from '../componets/foodBlog/vitrinProducts'

export const dynamic = 'force-dynamic'

export default function Page() {
  return (
    <>
      <Navbar navClass={undefined} navJustify={undefined} />

      <section className="relative mt-[74px]">
        <div className="container-fluid relative">
          <div className="grid grid-cols-1">
            <HeroSlider />
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <VitrinProducts />
          <LatestBlog />
        </div>
      </section>
      <FoodSlider />
      <SmallFooter />
      <Switcher />
    </>
  )
}