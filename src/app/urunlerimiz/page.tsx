import type { Metadata } from 'next'
import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import ProductCard from '../componets/ProductCard'
import { getAnasayfaProducts } from '@/app/lib/products'
import settings from 'data/settings.json'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: `Ürünlerimiz · ${settings.company_name}`,
  description: `${settings.company_name} ürün kataloğu. Plastik etiket ve çözümlerimizin tamamı.`,
}

export default async function Page() {
  const products = await getAnasayfaProducts()

  return (
    <>
      <Navbar navClass={undefined} navJustify={undefined} />

      <section className="relative md:py-24 py-16 mt-[74px]">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h1 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-semibold">
              Ürünlerimiz
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto">
              {settings.company_name} ürün kataloğu. Plastik etiket ve çözümlerimizin tamamını aşağıda bulabilirsiniz.
            </p>
          </div>

          {products.length === 0 ? (
            <p className="text-center text-slate-500 dark:text-slate-400">
              Şu anda listelenecek ürün bulunmuyor.
            </p>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-4">
              {products.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <Switcher />
    </>
  )
}
