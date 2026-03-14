"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import settings from 'data/settings.json'

export default function Footer() {
  const quickLinks = [
    { route: '/', title: 'Anasayfa' },
    { route: '/page-aboutus', title: 'Hakkımızda' },
    { route: '/contact-one', title: 'İletişim' },
  ]

  return (
    <div>
      <footer className="relative bg-slate-900 dark:bg-slate-800 text-gray-200 dark:text-gray-200">
        <div className="container relative">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="py-[60px] px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                  <div className="lg:col-span-6 md:col-span-12">
                    <Link href="/" className="inline-block">
                      <Image src="/images/logo-light.png" width={138} height={24} alt={settings.company_name} />
                    </Link>
                    <p className="mt-6 text-gray-300 max-w-md">
                      {settings.company_description}
                    </p>
                    <ul className="list-none mt-6 space-y-3">
                      {settings.address && (
                        <li className="flex items-start gap-3 text-gray-300">
                          <FiMapPin className="size-5 shrink-0 mt-0.5 text-indigo-400" />
                          <span>{settings.address}, {settings.city}</span>
                        </li>
                      )}
                      {settings.phone1 && (
                        <li className="flex items-center gap-3">
                          <FiPhone className="size-5 shrink-0 text-indigo-400" />
                          <a href={`tel:${settings.phone1.replace(/\s/g, '')}`} className="text-gray-300 hover:text-white transition-colors">
                            {settings.phone1}
                          </a>
                        </li>
                      )}
                      {settings.phone2 && (
                        <li className="flex items-center gap-3">
                          <FiPhone className="size-5 shrink-0 text-indigo-400" />
                          <a href={`tel:${settings.phone2.replace(/\s/g, '')}`} className="text-gray-300 hover:text-white transition-colors">
                            {settings.phone2}
                          </a>
                        </li>
                      )}
                      {settings.email && (
                        <li className="flex items-center gap-3">
                          <FiMail className="size-5 shrink-0 text-indigo-400" />
                          <a href={`mailto:${settings.email}`} className="text-gray-300 hover:text-white transition-colors">
                            {settings.email}
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-6">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Hızlı Bağlantılar</h5>
                    <ul className="list-none footer-list mt-6">
                      {quickLinks.map((item, index) => (
                        <li key={index} className={index > 0 ? 'mt-[10px]' : ''}>
                          <Link href={item.route} className="text-gray-300 hover:text-white duration-500 ease-in-out flex items-center gap-1">
                            <MdKeyboardArrowRight className="text-xl shrink-0" /> {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
          <div className="container relative">
            <div className="text-center">
              <p className="mb-0 text-gray-400 text-sm">
                {settings.footer_text}
                {' · '}
                Powered by{' '}
                <a href="https://codezzium.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  Codezzium
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
