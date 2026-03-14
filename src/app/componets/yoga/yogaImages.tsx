"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../../node_modules/tiny-slider/dist/tiny-slider.css'

import {Lightbox} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Fullscreen} from "yet-another-react-lightbox/plugins";

import { yogaImage } from 'data/dataTwo'

export default function YogaImages(){
    let settings = {
        container: '.tiny-twelve-item',
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
                items: 12
            },
    
            992: {
                items: 8
            },
    
            767: {
                items: 6
            },
    
            320: {
                items: 2
            },
        },
    }
    let [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    let [isOpenLightbox, setisOpen] = useState<boolean>(false);
  
    let currentImage = yogaImage.map((img) => ({ src: img }))

    let handleImageClick = (index:number) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    return(
            <div className="grid grid-cols-1 relative">
                <div className="tiny-twelve-item">
                    <TinySlider settings={settings}>
                        {yogaImage.map((item:string, index:number) => (
                            <div className="tiny-slide" key={index}>
                                <div className="card border-0 rounded-0">
                                    <div className="card-body p-0">
                                        <div className="lightbox d-inline-block" title="">
                                            <Image src={item} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="" onClick={() => handleImageClick(index)} alt="Yoga Asana" />
                                            <div className="overlay bg-dark"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TinySlider>

                </div>
                {isOpenLightbox && (
                    <Lightbox
                        open={isOpenLightbox}
                        close={() => setisOpen(false)}
                        index={currentImageIndex}
                        slides={currentImage}
                        plugins={[Fullscreen]} // Optional plugins
                    />
                )}

                <div className="absolute top-2/4 -translate-y-2/4 start-2/4 ltr:-translate-x-2/4 rtl:translate-x-2/4 text-center hidden md:block">
                    <Link href="https://www.instagram.com/shreethemes/" target="_blank"className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Follow Now</Link>
                </div>
            </div>
    )
}