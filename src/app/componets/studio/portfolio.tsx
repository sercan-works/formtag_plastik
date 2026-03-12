"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"

import { FaArrowRight } from 'react-icons/fa'
import { studioPortfolio } from '../../Data/dataTwo'

interface Portfolio{
    image: string;
    title: string;
    name: string;
}

export default function Portfolio(){
    return(
        <div className="container relative">
                <div className="grid grid-cols-1">
                    <div className="section-title mb-8">
                        <h6 className="text-indigo-600 text-sm font-bold mb-2">Portfolio</h6>
                        <h4 className="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold mb-4">Read some amazing <br /> case studies.</h4>
                        <p className="text-slate-400 max-w-xl mb-0">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
                    <div className="columns-3 gap-6">
                        {studioPortfolio.map((item:Portfolio,index:number)=>{
                            return(
                                <div key={index} className="mb-6 rounded-md break-inside-avoid">
                                    <div className="">
                                        <div className="relative">
                                            <div className="shadow-sm dark:shadow-gray-800 p-5 pb-0 rounded-md bg-emerald-600/5 dark:bg-emerald-600/30">
                                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%",height:"auto"}} className="rounded-t-md shadow-sm" alt="" />
                                            </div>
                                        </div>
        
                                        <div className="pt-4 px-3">
                                            <h5 className="mb-1 font-semibold text-lg"><Link href="#" className="hover:text-emerald-600">{item.title}</Link></h5>
                                            <span className="text-slate-400">{item.name}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>

            </div>
    )
}