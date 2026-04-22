import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { getAnasayfaProducts } from '@/app/lib/products'
import ProductCard from '../ProductCard'

const HOME_LIMIT = 6

export default async function LatestBlog() {
  const productList = await getAnasayfaProducts()
  const displayed = productList.slice(0, HOME_LIMIT)
  const hasMore = productList.length > HOME_LIMIT

  return (
    <div className="container relative md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Ürünlerimiz</h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          Formtag Plastik etiket ve çözümlerimizi inceleyin. Aşağıda öne çıkan ürünlerimizi bulabilirsiniz.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {displayed.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <Link
            href="/urunlerimiz"
            className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
          >
            Tümünü Gör <MdKeyboardArrowRight className="text-xl ms-1" />
          </Link>
        </div>
      )}
    </div>
  )
}
