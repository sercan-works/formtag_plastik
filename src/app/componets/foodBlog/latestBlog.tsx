import Image from 'next/image'
import Link from 'next/link'
import { getAnasayfaProducts } from '@/app/lib/products'

export default async function LatestBlog() {
  const productList = await getAnasayfaProducts()

  return (
    <div className="container relative md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Ürünlerimiz</h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          Formtag Plastik etiket ve çözümlerimizi inceleyin. Aşağıda öne çıkan ürünlerimizi bulabilirsiniz.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {productList.map((item) => (
          <div
            className="group relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden bg-white dark:bg-slate-900 flex flex-col h-full"
            key={item.id}
          >
            <div className="relative overflow-hidden h-56">
              <Image
                src={item.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                className="group-hover:scale-105 duration-500 ease-in-out"
                alt={item.name}
              />
              <div className="absolute top-0 start-0 pt-3 ps-3">
                <span className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">
                  {item.category || 'Kategori'}
                </span>
              </div>
            </div>

            <div className="p-4 flex flex-col flex-1">
              <h4 className="text-lg font-semibold mb-1">{item.name}</h4>
              <p className="text-slate-400 text-sm mb-3 line-clamp-3">
                {item.description ?? 'Açıklama daha sonra eklenecektir.'}
              </p>
              <div className="mt-auto flex items-center justify-between text-sm pt-2 border-t border-gray-100 dark:border-gray-800">
                <span className="text-indigo-600 font-medium">Ürün Kodu: {item.code}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
