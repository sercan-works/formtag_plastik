"use client"
import React from 'react'
import dynamic from "next/dynamic"
import { LuSearch } from 'react-icons/lu';
import { AiOutlineDollar, AiOutlineHome } from 'react-icons/ai';

const Select = dynamic(()=>import('react-select'),{ssr: false,});


export default function Form(){
    let country = [
        { value: '1', label: 'Afghanistan' },
        { value: '2', label: 'Azerbaijan' },
        { value: '3', label: 'Bahamas' },
        { value: '4', label: 'Bahrain' },
        { value: '5', label: 'Canada' },
        { value: '5', label: 'Denmark' },
        { value: '5', label: 'Djibouti' },
        { value: '5', label: 'Eritrea' },
        { value: '5', label: 'Estonia' },
        { value: '5', label: 'Gambia' },
    ]
    let time = [
        { value: '1', label: 'Part Time' },
        { value: '2', label: 'Freelancer' },
        { value: '3', label: 'Remote Work' },
        { value: '4', label: 'Office Work' },
    ]
    return(
        <form action="#">
            <div className="registration-form text-dark text-start">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 lg:divide-x-[1px] lg:divide-gray-200 lg:dark:divide-gray-700">
                    <div>
                        <div className="filter-search-form relative">
                            <LuSearch  className="icons  absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                            <input name="name" type="text" id="job-keyword" className="form-input lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0 ps-10" placeholder="Search your Keywords" />
                        </div>
                    </div>
                    <div>                                                        
                        <div className="filter-search-form relative">
                            <AiOutlineHome className="icons  absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                            <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0 ps-10" options={country} />

                            </div>
                        </div>
                    <div>                                                       
                        <div className="filter-search-form relative">
                            <AiOutlineDollar className="icons  absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                            <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0 ps-10 w-full" options={time} />
                        </div>
                        </div>
                    <div>
                        <input type="submit" id="search-buy" name="search" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white searchbtn lg:rounded-t-none lg w-full" value="Search" style={{height:"60px"}} />
                    </div>
                </div>
            </div>
        </form>
    )
}