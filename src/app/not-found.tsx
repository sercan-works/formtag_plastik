import Link from 'next/link'
import Navbar from './componets/Navbar/navbar'
import Footer from './componets/Footer/footer'

export default function NotFound() {
  return (
    <>
      <Navbar navClass={undefined} navJustify={undefined} />
      <section className="relative py-36 min-h-[60vh] flex items-center">
        <div className="container text-center">
          <h1 className="text-6xl font-bold text-slate-800 dark:text-white mb-4">404</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-6">Sayfa bulunamadı.</p>
          <Link
            href="/"
            className="inline-flex items-center px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold"
          >
            Anasayfaya Dön
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
