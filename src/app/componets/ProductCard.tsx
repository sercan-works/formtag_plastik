import Image from 'next/image'
import type { Product } from '@/app/lib/types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden bg-white dark:bg-slate-900 flex flex-col h-full">
      <div className="relative overflow-hidden h-56">
        <Image
          src={product.image}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          className="group-hover:scale-105 duration-500 ease-in-out"
          alt={product.name}
        />
        <div className="absolute top-0 start-0 pt-3 ps-3">
          <span className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">
            {product.category || 'Kategori'}
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h4 className="text-lg font-semibold mb-1">{product.name}</h4>
        <p className="text-slate-400 text-sm mb-3 line-clamp-3">
          {product.description ?? 'Açıklama daha sonra eklenecektir.'}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm pt-2 border-t border-gray-100 dark:border-gray-800">
          <span className="text-indigo-600 font-medium">Ürün Kodu: {product.code}</span>
        </div>
      </div>
    </div>
  )
}
