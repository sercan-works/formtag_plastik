"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { animateScroll as scroll } from 'react-scroll'
import { HiArrowSmUp } from 'react-icons/hi'

export default function Switcher() {
  const [scrollToTops, setScrollToTops] = useState<boolean>(false)

  useEffect(() => {
    function scrollHandler() {
      setScrollToTops(window.scrollY >= 500)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', scrollHandler)
    }
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true })
  }

  return (
    <Link
      href="#"
      onClick={scrollToTop}
      id="back-to-top"
      className={`${!scrollToTops ? 'hidden' : ''} back-to-top fixed text-lg rounded-full z-10 bottom-5 end-2 size-9 text-center bg-indigo-600 text-white leading-9 flex items-center justify-center hover:bg-indigo-700`}
    >
      <HiArrowSmUp />
    </Link>
  )
}