'use client'
import React from 'react'

interface QtnProps {
    item: number;
}

export default function Qtn({ item }: QtnProps){
    const handleStepDown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const button = e.target as HTMLElement;
        const input = button.closest("div")?.querySelector('input[type="number"]') as HTMLInputElement | null;
        if (input) {
            input.stepDown();
        }
    };

    const handleStepUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const button = e.target as HTMLElement;
        const input = button.closest("div")?.querySelector('input[type="number"]') as HTMLInputElement | null;
        if (input) {
            input.stepUp();
        }
    };
    return(
    <div className="qty-icons space-x-1">
        <button onClick={handleStepDown} className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white minus">
            -
        </button>
        <input min="0" readOnly name="quantity" value={item} type="number" className="h-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white pointer-events-none w-16 ps-4 quantity" />
        <button onClick={handleStepUp} className="size-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white plus" >
            +
        </button>
    </div>
    )
}