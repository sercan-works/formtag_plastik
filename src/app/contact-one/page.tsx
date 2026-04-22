import React from 'react'
import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import settings from 'data/settings.json'

export default function Page() {
  const fullAddress = [settings.address, settings.city].filter(Boolean).join(', ')
  const hasSocial = Boolean(settings.facebook_url || settings.instagram_url)

  return (
    <>
      <Navbar navClass={undefined} navJustify={undefined} />

      <section className="relative pt-[90px] md:pt-[110px] md:pb-20 pb-12">
        <div className="container relative">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="md:text-4xl text-3xl font-semibold text-slate-800 dark:text-white">İletişim</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-xl mx-auto">
              Bize ulaşın, sorularınızı yanıtlayalım.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Harita */}
            <div className="w-full h-[300px] sm:h-[380px] md:h-[460px] lg:h-auto lg:min-h-[520px] rounded-2xl overflow-hidden shadow-md dark:shadow-gray-800 border border-slate-200 dark:border-slate-700">
              <iframe
                title="Formtag Plastik konum"
                src={settings.google_maps_link}
                className="w-full h-full border-0 block"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Sağ kolon: kartlar + sosyal */}
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4 flex-1">
                {settings.phone1 && (
                  <a
                    href={`tel:${settings.phone1.replace(/\s/g, '')}`}
                    className="group flex lg:flex-row flex-col items-center lg:items-center text-center lg:text-left lg:gap-5 p-4 md:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-all duration-300"
                  >
                    <div className="size-11 md:size-14 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300 mb-3 lg:mb-0 shrink-0">
                      <FiPhone className="size-5 md:size-6" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm md:text-base font-semibold text-slate-800 dark:text-white mb-1">Telefon</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm break-all">{settings.phone1}</p>
                      {settings.phone2 && <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm break-all">{settings.phone2}</p>}
                    </div>
                  </a>
                )}

                {settings.email && (
                  <a
                    href={`mailto:${settings.email}`}
                    className="group flex lg:flex-row flex-col items-center lg:items-center text-center lg:text-left lg:gap-5 p-4 md:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-all duration-300"
                  >
                    <div className="size-11 md:size-14 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300 mb-3 lg:mb-0 shrink-0">
                      <FiMail className="size-5 md:size-6" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm md:text-base font-semibold text-slate-800 dark:text-white mb-1">E-posta</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm break-all">{settings.email}</p>
                    </div>
                  </a>
                )}

                {fullAddress && (
                  <div className="col-span-2 lg:col-span-1 flex lg:flex-row flex-col items-center lg:items-center text-center lg:text-left lg:gap-5 p-4 md:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-all duration-300">
                    <div className="size-11 md:size-14 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-3 lg:mb-0 shrink-0">
                      <FiMapPin className="size-5 md:size-6" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm md:text-base font-semibold text-slate-800 dark:text-white mb-1">Adres</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">{fullAddress}</p>
                    </div>
                  </div>
                )}
              </div>

              {hasSocial && (
                <div className="flex flex-col items-center lg:items-start lg:flex-row lg:gap-4 mt-4 lg:mt-2 p-4 md:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                  <h4 className="text-sm md:text-base font-semibold text-slate-800 dark:text-white mb-3 lg:mb-0 lg:self-center">Bizi takip edin</h4>
                  <div className="flex items-center gap-3 lg:ms-auto">
                    {settings.facebook_url && (
                      <a
                        href={settings.facebook_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="size-10 md:size-11 inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-colors shadow-sm"
                      >
                        <FaFacebookF className="size-4 md:size-5" />
                      </a>
                    )}
                    {settings.instagram_url && (
                      <a
                        href={settings.instagram_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="size-10 md:size-11 inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-colors shadow-sm"
                      >
                        <FaInstagram className="size-4 md:size-5" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Switcher />
    </>
  )
}
