import Image from 'next/image'
import { getVitrinProducts } from '@/app/lib/products'

export default async function VitrinProducts() {
  const products = await getVitrinProducts()

  if (products.length === 0) return null

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 justify-center">
      {products.map((item) => (
        <div key={item.id} className="group relative rounded-md shadow-md dark:shadow-gray-800 overflow-hidden">
          <Image
            src={item.image}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="group-hover:scale-105 duration-500 ease-in-out"
            alt={item.name}
          />
          <div className="absolute inset-0 bg-slate-900/60" />
          <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center">
            <span className="text-white font-semibold text-xl">{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
