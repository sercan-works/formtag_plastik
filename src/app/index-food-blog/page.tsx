import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import SmallFooter from '../componets/Footer/smallFooter'
import Switcher from '../componets/switcher'
import FoodSlider from '../componets/foodSlider'
import HeroSlider from '../componets/foodBlog/heroSlider'
import LatestBlog from '../componets/foodBlog/latestBlog'

import { FoodImage } from '../Data/dataThree'

export const dynamic = 'force-dynamic'

interface FoodImage{
    image: string;
    title: string;
}

export default function Page(){
    
    return(
        <>
        <Navbar navClass={undefined} navJustify={undefined}/>

        <section className="relative mt-[74px]">
            <div className="container-fluid relative">
                <div className="grid grid-cols-1">
                    <HeroSlider/>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 justify-center">
                    {FoodImage.map((item:FoodImage,index:number)=>{
                        return(
                            <div key={index} className="group relative rounded-md shadow-md dark:shadow-gray-800 overflow-hidden">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                <div className="absolute inset-0 bg-slate-900/60"></div>

                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center">
                                    <Link href="/#!" className="text-white font-semibold text-xl mb-0">{item.title}</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <LatestBlog/>
        </section>
                            
        <FoodSlider/>
        <SmallFooter/>
        <Switcher/>
        </>
    )
}