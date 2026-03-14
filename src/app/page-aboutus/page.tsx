import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import Counter from '../componets/AboutUs/counter'

import { FaRegEnvelope } from 'react-icons/fa'
import { HiOutlineShieldCheck, HiOutlineLightningBolt, HiOutlineCube, HiOutlineTruck } from 'react-icons/hi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import type { IconType } from 'react-icons'

import settings from 'data/settings.json'
import aboutData from 'data/about.json'
import introData from 'data/intro.json'

const iconMap: Record<string, IconType> = {
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineCube,
  HiOutlineTruck,
}

const about = aboutData as {
  hero_title: string
  hero_subtitle: string
  hero_banner_image: string
  story_title: string
  story_paragraph_1: string
  story_paragraph_2: string
  story_images: string[]
  story_image_alt: string
  values_title: string
  values_subtitle: string
  cta_title: string
  cta_text: string
  cta_button: string
}

const { benefits, stats } = introData as {
  benefits: Array<{ icon: string; title: string; text: string }>
  stats: Array<{ value: string; label: string }>
}

export default function Page() {
  return (
    <>
      <Navbar navClass="nav-light" navJustify={undefined} />

      <section
        className="relative table w-full py-36 lg:py-44 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url('${about.hero_banner_image}')` }}
      >
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              {about.hero_title}
            </h3>
            <p className="text-slate-300 text-lg max-w-xl mx-auto">
              {about.hero_subtitle}
            </p>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex mx-auto space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link href="/">{settings.company_name}</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">
              {about.hero_title}
            </li>
          </ul>
        </div>
      </section>

      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Biz kimiz */}
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-5 md:col-span-6">
              <div className="grid grid-cols-12 gap-6 items-center">
                <div className="col-span-6">
                  <div className="grid grid-cols-1 gap-6">
                    {about.story_images[0] && (
                      <Image src={about.story_images[0]} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="shadow-sm rounded-md" alt={about.story_image_alt} />
                    )}
                    {about.story_images[1] && (
                      <Image src={about.story_images[1]} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="shadow-sm rounded-md" alt={about.story_image_alt} />
                    )}
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="grid grid-cols-1 gap-6">
                    {about.story_images[2] && (
                      <Image src={about.story_images[2]} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="shadow-sm rounded-md" alt={about.story_image_alt} />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 md:col-span-6">
              <div className="lg:ms-5">
                <Counter />
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                  {about.story_title}
                </h3>
                <p className="text-slate-400 max-w-xl mb-4">
                  {about.story_paragraph_1}
                </p>
                <p className="text-slate-400 max-w-xl">
                  {about.story_paragraph_2}
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact-one"
                    className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                  >
                    <FaRegEnvelope className="me-2 text-sm" /> {about.cta_button}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl text-2xl font-semibold">{about.values_title}</h3>
            <p className="text-slate-400 max-w-xl mx-auto">{about.values_subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {benefits.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  {Icon && (
                    <div className="size-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                      <Icon className="size-6" />
                    </div>
                  )}
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Rakamlarla Formtag */}
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8 px-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">{item.value}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative md:py-24 py-16 bg-indigo-600">
        <div className="container relative text-center">
          <h3 className="md:text-3xl text-2xl font-semibold text-white mb-4">{about.cta_title}</h3>
          <p className="text-white/90 max-w-xl mx-auto mb-6">{about.cta_text}</p>
          <Link
            href="/contact-one"
            className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border border-white text-white hover:bg-white hover:text-indigo-600 rounded-md transition-colors"
          >
            {about.cta_button} <MdKeyboardArrowRight className="text-xl ms-1" />
          </Link>
        </div>
      </section>

      <Footer />
      <Switcher />
    </>
  )
}
