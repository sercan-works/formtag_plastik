import React from 'react'
import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import FoodSlider from '../componets/foodSlider'
import HeroSlider from '../componets/foodBlog/heroSlider'
import LatestBlog from '../componets/foodBlog/latestBlog'
import IntroSection from '../componets/foodBlog/introSection'
import VitrinProducts from '../componets/foodBlog/vitrinProducts'
import SloganHero from '../componets/foodBlog/sloganHero'
import { getSliderProducts } from '@/app/lib/products'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const sliderProducts = await getSliderProducts()
  return (
    <>
      <Navbar navClass={undefined} navJustify={undefined} />

      <section className="relative mt-[74px] pt-4">
        <div className="container-fluid relative">
          <div className="grid grid-cols-1">
            <HeroSlider sliderProducts={sliderProducts} />
          </div>
        </div>
      </section>

      <SloganHero />

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <IntroSection />
          <div className="md:mt-20 mt-12">
            <VitrinProducts />
          </div>
          <LatestBlog />
        </div>
      </section>
      <FoodSlider />
      <Footer />
      <Switcher />
    </>
  )
}