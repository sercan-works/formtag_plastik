"use client"

import React from 'react'
import introData from 'data/intro.json'

export default function SloganHero() {
  const { slogan } = introData as { slogan: string }
  const [line1, line2] = slogan.includes(',') ? slogan.split(', ').map((s) => s.trim()) : [slogan, '']

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-800 dark:from-indigo-700 dark:via-indigo-800 dark:to-slate-900" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-300 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="container relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-medium text-white/90">Formtag Plastik</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            <span className="block">{line1}</span>
            {line2 && (
              <span className="block mt-2 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                {line2}
              </span>
            )}
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Eskişehir&apos;de termoform alanında yenilikçi üretim anlayışıyla güvenilir çözümler sunuyoruz.
          </p>
        </div>
      </div>
    </section>
  )
}
