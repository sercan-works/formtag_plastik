"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CountUp from 'react-countup';

import { BiMicrophone } from 'react-icons/bi';

export default function HeroSection(){
    const [isOpen, setOpen] = useState<boolean | undefined>(false)

    return(
        <section className="relative table w-full py-36 lg:py-44 bg-gradient-to-br from-indigo-600/20 to-yellow-500/20 dark:from-indigo-600/20 dark:to-yellow-500/20">
            <div className="container relative">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-7">
                        <div className="me-6">
                            <BiMicrophone className="text-indigo-600 text-4xl"/>
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-[54px] my-5 text-black dark:text-white">Find and Listen on <br/> your <span className="text-indigo-600">favorite podcast</span></h4>
                            <p className="text-slate-500 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>
                        
                            <div className="mt-8">
                                <Link href="#!" onClick={()=>setOpen(!isOpen)} scroll={false}  className="lightbox py-1.5 ps-5 pe-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">Listen Now <span className="size-8 inline-flex items-center justify-center rounded-full bg-white border border-white text-indigo-600 ms-3"><i className="mdi mdi-play"></i></span></Link>
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
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="grid grid-cols-2 items-center md:gap-4 gap-3">
                            <div className="md:space-y-4 space-y-3">
                                <Image src='/images/podcast/h2.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt=""/>
                                <Image src='/images/podcast/h1.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}}  className="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt=""/>
                            </div>
    
                            <div className="md:space-y-4 space-y-3">
                                <Image src='/images/podcast/h3.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}}  className="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt=""/>
                                <Image src='/images/podcast/h4.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}}  className="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt=""/>
                            </div>
                        </div>

                        <span className="size-24 bg-yellow-500 border-[3px] border-gray-100 dark:border-gray-800 rounded-full absolute bottom-0 -end-4 flex items-center justify-center">
                            <span className="text-white text-xl text-center font-semibold">
                                <CountUp className="counter-value block" start={100} end={551} />
                                <span className="text-white font-semibold text-sm block">Podcasts</span>
                            </span>
                        </span>

                        <div className="absolute top-1/2 -translate-y-1/2 -start-4 py-2 px-3 flex items-center rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-fit my-3">
                            <BiMicrophone className="text-indigo-600 text-xl align-middle"/> <span className="font-semibold ms-1">Amazing Conversation</span>
                        </div>

                        <div className="absolute -top-4 start-1/2 -translate-x-1/2 text-center">
                            <Link href="#!" onClick={()=>setOpen(!isOpen)}  className="lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center text-white bg-indigo-600">
                               <BiMicrophone className="inline-flex items-center justify-center text-2xl"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}