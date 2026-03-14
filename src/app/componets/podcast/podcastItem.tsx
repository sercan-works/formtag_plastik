"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic';

const TinySlider = dynamic(()=>import('tiny-slider-react'), {ssr:false});

import { podcastData } from 'data/dataTwo';
import { FaArrowRight } from 'react-icons/fa';

interface PodCastData{
    image: string;
    title: string;
    desc: string;
}

export default function PodcastItem(){
   const [isOpen, setOpen] = useState<boolean | undefined>(false)

    let settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i className="mdi mdi-chevron-left "></i>', '<i className="mdi mdi-chevron-right"></i>'],
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },
    
            767: {
                items: 2
            },
    
            320: {
                items: 1
            },
        },
    }

    return(
        <div className="tiny-three-item-icon">
        <TinySlider settings={settings}>
            {podcastData.map((item:PodCastData, index:number)=>{
                return(
                    <div className="tiny-slide" key={index}>
                        <div className="group relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden m-3">
                            <div className="relative">
                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}}  alt=""/>

                                <Link href="#!" onClick={()=>setOpen(!isOpen)} scroll={false} className="lightbox size-8 inline-flex items-center justify-center rounded-full bg-white border border-white text-indigo-600 absolute top-3 end-3"><i className="mdi mdi-play"></i></Link>

                                <div className="absolute start-0 bottom-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                    <div className="pb-4 ps-4 flex items-center">
                                        <Image src='/images/client/01.jpg' width={0} height={0} className="size-10 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt=""/>
                                        <div className="ms-3">
                                            <Link href="" className="font-semibold text-white block">Calvin Carlo</Link>
                                            <span className="text-white/70 text-sm">4k Subscribe</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {isOpen && 
                                <div className="flex bg-[#00000099] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div className="relative p-1 w-full max-w-2xl max-h-full">
                                        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                                            <div className="flex items-center justify-between p-1 border-b rounded-t dark:border-gray-600 border-gray-200">
                                                <button type="button" onClick={()=>setOpen(!isOpen)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                    </svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>
                                            </div>
                                            <div className="p-1 md:p-1 space-y-4">
                                                <iframe width="100%" height="400" src="https://www.youtube.com/embed/yba7hPeTSjk?playlist=yba7hPeTSjk&loop=1"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="content p-6">
                                <audio controls className="block w-full max-w-md mx-auto mb-3">
                                    {/* <source src="assets/images/audio.mp3" type="audio/mpeg"/> */}
                                </audio>

                                <Link href="/blog-youtube-post" className="title h5 text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                <p className="text-slate-400 mt-3">{item.desc}</p>
                                
                                <div className="mt-4">
                                    <Link href="/blog-youtube-post" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Watch Now <FaArrowRight className='ms-1 text-[10px]'/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </TinySlider>
        </div>
    )
}