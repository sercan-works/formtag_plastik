'use client'
import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"

import NftNavbar from '../componets/Navbar/nftNavbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import NftTab from '../componets/nft/nftTab'

import { nftProdectData } from 'data/data'
import { FiX } from 'react-icons/fi'

interface NftData{
    id: number;
    image: string;
    title: string;
    amount: string;
    like: string;
    date?: string | undefined;
    dataGroup: string;
    category: string;
}

export default function Page(){

    const[open, setOpen] = useState(false)
    const[open2, setOpen2] = useState(false)
  
    return(
        <>
        <NftNavbar/>
        <section className="relative table w-full md:pb-24 pb-16 mt-28">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-6 md:col-span-5">
                        <div className="sticky top-20">
                            <Image src="/images/nft/items/item-detail-1.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md shadow-md dark:shadow-gray-800" alt="" />
                        </div>
                    </div>

                    <div className="lg:col-span-6 md:col-span-7">
                        <div className="">
                            <h5 className="lg:text-4xl lg:leading-relaxed text-2xl font-semibold">Wolf with Skull <span className="bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text">Orange <br /> Illustration</span> T-shirt Tattoo </h5>

                            <div className="grid md:grid-cols-2 grid-cols-1 mt-6">
                                <div>
                                    <h6 className="text-lg font-semibold">Current Bid:</h6>
                                    <h6 className="text-2xl font-semibold mt-2">4.85 ETH</h6>
                                    <h6 className="text-slate-400 mt-2">$450.48USD</h6>
                                </div>

                                <div>
                                    <h6 className="text-lg font-semibold">Auction Ending In:</h6>
                                    <span id="auction-item-1" className="text-2xl font-semibold mt-2"></span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link href="#" onClick={()=>setOpen(!open)}  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2"><i className="mdi mdi-gavel fs-5 me-2"></i> Place a Bid</Link>
                                <Link href="#" onClick={()=>setOpen2(!open2)} data-modal-toggle="NftBuynow" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><i className="mdi mdi-cart fs-5 me-2"></i> Buy Now</Link>
                            </div>

                           <NftTab/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Related Auction Items</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Techwind with their fans and unique token collectors!</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {nftProdectData.slice(0,4).map((item:NftData,index:number)=>{
                            return(
                                <div key={index} className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out">
                                    <div className="relative">
                                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />
                                        <div className="absolute end-0 top-0 mt-6 me-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                            <Link href="/#!" className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow-sm dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                        </div>
        
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-500 ease-in-out">
                                            <Link href={`/nft-detail/${item.id}`} className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Place Bid</Link>
                                        </div>
                                    </div>
        
                                    <div className="p-6 relative">
                                        <Link href={`/nft-detail/${item.id}`} className="text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
        
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center">
                                                <i className="mdi mdi-ethereum text-xl leading-none text-indigo-600 me-1"></i>
                                                <span className="block font-semibold text-indigo-600">{item.amount}</span>
                                            </div>
        
                                            <div>
                                                <i className="mdi mdi-heart text-red-600"></i> <span className="text-slate-400">{item.like}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                        })}  
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        {open && 
            <div className="fixed w-full h-screen z-999 top-0 left-0 bottom-0 bg-slate-600/70">
                <div id="NftBid" className="rounded-md  inline-flex justify-center items-center size-full">
                    <div className="relative h-auto md:w-[480px] w-300px shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                            <h3 className="font-bold text-lg">Place a Bid</h3>
                            <form method="dialog">
                                <button className="size-6 flex justify-center items-center shadow-sm dark:shadow-gray-800 rounded-md btn-ghost" onClick={()=>setOpen(!open)}><FiX/></button>
                            </form>
                        </div>
                        <div className="p-6">
                            <form className="text-start">
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="number">Your Bid Price:</label>
                                        <input name="etherium" id="number" type="number" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-3" placeholder="00.00 ETH"/>
                                    </div>
                
                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="number2">Enter Your QTY:</label>
                                        <input name="quantity" id="number2" type="number" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-3" placeholder="0"/>
                                        <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white mt-1">Note:</span> Max. Qty 5</span>
                                    </div>
                                </div>
                            </form>
                
                            <div className="pt-4 border-t dark:border-t-gray-800">
                                <div className="flex justify-between">
                                    <p className="font-semibold text-sm"> You must bid at least:</p>
                                    <p className="text-sm text-indigo-600 font-semibold"> 1.22 ETH </p>
                                </div>
                                <div className="flex justify-between mt-1">
                                    <p className="font-semibold text-sm"> Service free:</p>
                                    <p className="text-sm text-indigo-600 font-semibold"> 0.05 ETH </p>
                                </div>
                                <div className="flex justify-between mt-1">
                                    <p className="font-semibold text-sm"> Total bid amount:</p>
                                    <p className="text-sm text-indigo-600 font-semibold"> 1.27 ETH </p>
                                </div>
                            </div>
                
                            <div className="mt-4">
                                <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white w-full"><i className="mdi mdi-gavel"></i> Place a Bid</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        {open2 && 
            <div className="fixed w-full h-screen z-999 top-0 left-0 bottom-0 bg-slate-600/70">
                <div id="NftBid" className="rounded-md  inline-flex justify-center items-center size-full">
                    <div className="relative h-auto md:w-[480px] w-300px shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                            <h3 className="font-bold text-lg">Checkout</h3>
                            <form method="dialog">
                                <button onClick={()=>setOpen2(!open2)} className="size-6 flex justify-center items-center shadow-sm dark:shadow-gray-800 rounded-md btn-ghost"><FiX /></button>
                            </form>
                        </div>
                        <div className="p-6">
                            <form className="text-start">
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="number3">Your Price:</label>
                                        <input name="etherium" id="number3" type="number" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-3" placeholder="00.00 ETH"/>
                                    </div>
                                </div>
                            </form>

                            <div className="pt-4 border-t dark:border-t-gray-800">
                                <div className="flex justify-between">
                                    <p className="font-semibold text-sm"> You must bid at least:</p>
                                    <p className="text-sm text-indigo-600 font-semibold"> 1.22 ETH </p>
                                </div>
                                <div className="flex justify-between mt-1">
                                    <p className="font-semibold text-sm"> Service free:</p>
                                    <p className="text-sm text-indigo-600 font-semibold"> 0.05 ETH </p>
                                </div>
                                <div className="flex justify-between mt-1">
                                    <p className="font-semibold text-sm"> Total bid amount:</p>
                                    <p className="text-sm text-indigo-600 font-semibold"> 1.27 ETH </p>
                                </div>
                            </div>

                            <div className="flex items-center p-4 bg-red-600/10 text-red-600 mt-4 rounded-lg">
                                <i className="uil uil-exclamation-octagon text-3xl"></i>

                                <div className="ms-2">
                                    <span className="block font-semibold">This creator is not verified</span>
                                    <span className="block">Purchase this item at your own risk</span>
                                </div>
                            </div>

                            <div className="mt-4">
                                <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white w-full"><i className="mdi mdi-lightning-bolt"></i> Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}