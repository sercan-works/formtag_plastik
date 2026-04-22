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

const { benefits, stats, slogan } = introData as {
  benefits: Array<{ icon: string; title: string; text: string }>
  stats: Array<{ value: string; label: string }>
  slogan: string
}

export default function Page() {
  return (
    <>
      <Navbar navClass={undefined} navJustify={undefined} />

      {/* Biz kimiz */}
      <section className="relative md:py-24 py-16 mt-[74px]">
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
                <div className="text-slate-400 max-w-xl space-y-4">
                  {about.story_paragraph_1.split('\n\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="text-slate-400 max-w-xl mt-4 space-y-4">
                  {about.story_paragraph_2.split('\n\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
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
          <p className="text-indigo-200 text-lg font-medium mb-2">&ldquo;{slogan}&rdquo;</p>
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
