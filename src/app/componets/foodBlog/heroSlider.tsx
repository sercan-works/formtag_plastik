"use client"
import React from 'react'
import Image from "next/image"
import dynamic from "next/dynamic"
import type { Product } from '@/app/lib/types'

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css'
import { foodServices, type FoodServiceItem } from 'data/dataTwo'

interface HeroSliderProps {
  /** Slider'da gösterilecek ürünler (data/products.json anasayfa içinde slider: true olanlar). Yoksa foodServices kullanılır. */
  sliderProducts?: Product[];
}

export default function HeroSlider({ sliderProducts }: HeroSliderProps){
    const useProducts = Boolean(sliderProducts?.length);
    let settings = {
        container: '.tiny-six-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 6
            },
    
            992: {
                items: 4
            },
    
            767: {
                items: 3
            },
    
            320: {
                items: 1
            },
        },
    }
   
    return (
        <div className="tiny-six-item">
            <TinySlider settings={settings}>
                {useProducts
                    ? sliderProducts!.map((item) => (
                        <div className="tiny-slide h-full" key={item.id}>
                            <div className="group relative overflow-hidden aspect-[8/9] w-full bg-slate-100 dark:bg-slate-800">
                                <Image
                                    src={item.image}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 16vw"
                                    className="object-cover group-hover:scale-105 duration-500 ease-in-out"
                                    alt={item.name}
                                />
                                <div className="absolute inset-0 bg-gradient-to-b to-slate-900 via-slate-900/50 from-transparent opacity-0 group-hover:opacity-100 duration-500 ease-in-out" />
                                <div className="absolute bottom-0 start-0 end-0 p-6 -mb-96 group-hover:mb-0 duration-500 ease-in-out">
                                    <div className="text-center">
                                        <span className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">{item.category}</span>
                                        <p className="text-white font-semibold block text-lg mt-4">{item.name}</p>
                                        <p className="text-white/80 text-sm mt-1 line-clamp-2">{item.description}</p>
                                        <p className="text-indigo-400 text-xs mt-2">Ürün Kodu: {item.code}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    : foodServices.map((item, index) => (
                        <div className="tiny-slide h-full" key={index}>
                            <div className="group relative overflow-hidden aspect-[8/9] w-full bg-slate-100 dark:bg-slate-800">
                                <Image src={item.image} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 16vw" className="object-cover group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-b to-slate-900 via-slate-900/50 from-transparent opacity-0 group-hover:opacity-100 duration-500 ease-in-out" />
                                <div className="absolute bottom-0 start-0 end-0 p-6 -mb-96 group-hover:mb-0 duration-500 ease-in-out">
                                    <div className="text-center">
                                        <a href="#" className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">{item.title}</a>
                                        <a href="/food-recipe" className="text-white font-semibold hover:text-indigo-600 block text-lg mt-4 duration-500 ease-in-out">{item.description}</a>
                                        <div className="flex items-center justify-center mt-4">
                                            <Image src={item.imageList} width={40} height={40} className="size-10 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                                            <a href="#" className="font-medium text-white block ms-2">{item.name}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                    <a href="/#!" className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow-sm dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    ))}
            </TinySlider>
        </div>
    )
}