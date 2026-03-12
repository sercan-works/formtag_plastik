"use client"
import React,{useState, } from "react"
import Link from "next/link"
import Image from "next/image"

import {Lightbox} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Fullscreen} from "yet-another-react-lightbox/plugins";

import { portfolio,portfolioImage } from "../../Data/dataTwo";

export default function PortfolioItem(){
    let [isOpen, setisOpen] = useState<boolean>(false);
    let [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    let [selectedCategory, setSelectedCategory] = useState<string |null>(null);

    let handleImageClick = (index:number) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    let currentImage = portfolioImage.map((img) => ({ src: img }))

    let matchCategory = (category:null | string) => {
        setSelectedCategory(category);
    };

    let filteredData = selectedCategory
        ? portfolio.filter((item) => item.category === selectedCategory)
        : portfolio;
        
    return(
        <>
        <div className="container relative">
                <div className="grid grid-cols-1 items-center gap-[30px]">
                    <div className="filters-group-wrap text-center">
                        <div className="filters-group">
                            <ul className="mb-0 list-none container-filter-border-bottom filter-options">
                                <li className={`${selectedCategory === null ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                <li className={`${selectedCategory === 'branding' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="branding" onClick={() => matchCategory('branding')} >Branding</li>
                                <li className={`${selectedCategory === 'designing' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="designing" onClick={() => matchCategory('designing')}>Designing</li>
                                <li className={`${selectedCategory === 'photography' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                                <li className={`${selectedCategory === 'development' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid relative mt-8">
                <div className="columns-5 gap-1">
                    {
                        filteredData.map((data, index) => {
                            return (
                                <div className="p-1 picture-item mb-1" data-groups='["branding"]' key={index}>
                                    <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                        <Link href="#" onClick={() => handleImageClick(data.id)} className="lightbox transition-all duration-500 group-hover:scale-105" title="">
                                            <Image src={data.image} width={0} height={0} sizes="100vw" style={{height:"auto", width:"100%"}} className="" alt="" />
                                        </Link>
                                        <div className="absolute -bottom-52 group-hover:bottom-2 start-2 end-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow-sm dark:shadow-gray-800">
                                            <Link href="/portfolio-detail-two" className="hover:text-indigo-600 text-lg transition duration-500 font-medium">Iphone mockup</Link>
                                            <h6 className="text-slate-400">Branding</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
              
                {isOpen &&(
                     <Lightbox
                        open={isOpen}
                        close={() => setisOpen(false)}
                        index={currentImageIndex}
                        slides={currentImage}
                        plugins={[Fullscreen]} // Optional plugins
                    />
                )}

                <div className="flex justify-center mt-8">
                    <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">See More</Link>
                </div>
            </div>
        </>
    )
}