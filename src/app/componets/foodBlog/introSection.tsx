import { HiOutlineShieldCheck, HiOutlineLightningBolt, HiOutlineCube, HiOutlineTruck } from 'react-icons/hi'
import type { IconType } from 'react-icons'
import introData from 'data/intro.json'

const iconMap: Record<string, IconType> = {
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineCube,
  HiOutlineTruck,
}

export default function IntroSection() {
  const { intro, benefits, stats } = introData as {
    intro: { title: string; description: string }
    benefits: Array<{ icon: string; title: string; text: string }>
    stats: Array<{ value: string; label: string }>
  }

  return (
    <div className="grid grid-cols-1">
      {/* Kısa tanıtım */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="mb-4 md:text-3xl text-2xl font-semibold text-slate-800 dark:text-white">
          {intro.title}
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          {intro.description}
        </p>
      </div>

      {/* Neden Formtag Plastik */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {benefits.map((item) => {
          const Icon = iconMap[item.icon]
          return (
            <div
              key={item.title}
              className="p-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-colors"
            >
              {Icon && (
                <div className="size-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                  <Icon className="size-6" />
                </div>
              )}
              <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.text}</p>
            </div>
          )
        })}
      </div>

      {/* Rakamlarla Formtag */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8 px-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
        {stats.map((item) => (
          <div key={item.label} className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">{item.value}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
