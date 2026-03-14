"use client"
import React, {useState,} from 'react'

import { accordionData } from 'data/dataTwo';

interface AccordionData{
    id: number;
    title: string;
    content: string;
}

export default function Faq(){
    let [activeIndex, setActiveIndex] = useState<number>(0);

    let toggleAccordion = (index:number) => {
        if (activeIndex === index) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    }
    return(
        <div id="accordion-collapse" >
            {accordionData.slice(0,4).map((item:AccordionData, index:number) => (
                <div key={index} className="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                    <h2 className="text-base font-semibold">
                        <button type="button" onClick={() => toggleAccordion(index)} className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === index ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''}`} >
                            <span>{item.title}</span>
                            <svg className={`${activeIndex === index ? "rotate-180" : "rotate-270" } size-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </h2>
                    {activeIndex === index && (
                        <div>
                            <div className="p-5">
                                <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                    )}
                </div>

            ))}
        </div>
    )
}