import React from 'react'
import Link from 'next/link'
import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi'
import settings from 'data/settings.json'
import aboutData from 'data/about.json'

const about = aboutData as { hero_banner_image: string }

export default function Page() {
  const fullAddress = [settings.address, settings.city].filter(Boolean).join(', ')

  return (
    <>
      <Navbar navClass="nav-light" navJustify={undefined} />

      <section
        className="relative table w-full py-36 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('${about.hero_banner_image}')` }}
      >
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
              İletişim
            </h3>
            <p className="text-slate-300 text-lg max-w-xl mx-auto mt-2">
              Bize ulaşın, sorularınızı yanıtlayalım.
            </p>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex flex-wrap justify-center gap-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link href="/">{settings.company_name}</Link>
            </li>
            <li className="inline-block text-base text-white/50 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">
              İletişim
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

      {/* Telefon, Adres, E-posta kartları */}
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {settings.phone1 && (
              <a
                href={`tel:${settings.phone1.replace(/\s/g, '')}`}
                className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-all duration-300"
              >
                <div className="size-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300 mb-5">
                  <FiPhone className="size-8" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Telefon</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">{settings.phone1}</p>
                {settings.phone2 && <p className="text-slate-500 dark:text-slate-400 text-sm">{settings.phone2}</p>}
                <span className="mt-3 text-indigo-600 dark:text-indigo-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Arayın →
                </span>
              </a>
            )}

            {fullAddress && (
              <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-all duration-300">
                <div className="size-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-5">
                  <FiMapPin className="size-8" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Adres</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{fullAddress}</p>
              </div>
            )}

            {settings.email && (
              <a
                href={`mailto:${settings.email}`}
                className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-all duration-300"
              >
                <div className="size-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300 mb-5">
                  <FiMail className="size-8" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">E-posta</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm break-all">{settings.email}</p>
                <span className="mt-3 text-indigo-600 dark:text-indigo-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  E-posta gönderin →
                </span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Google Harita */}
      <section className="relative md:py-16 py-10">
        <div className="container relative">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white text-center mb-6">Harita</h3>
          <div className="w-full overflow-hidden rounded-xl shadow-lg dark:shadow-gray-800 border border-slate-200 dark:border-slate-700">
            <iframe
              title="Formtag Plastik konum"
              src={settings.google_maps_link}
              className="w-full h-[400px] sm:h-[450px] md:h-[520px] lg:h-[560px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
      <Switcher />
    </>
  )
}
