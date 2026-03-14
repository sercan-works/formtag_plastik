'use client'

import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import settings from 'data/settings.json'

/** wa.me linki için numarayı sadece rakamlara çevirir (örn: +90 212 222 33 44 -> 902122223344) */
function getWhatsAppNumber(phone: string): string {
  return phone.replace(/\D/g, '')
}

export default function WhatsAppButton() {
  const whatsapp = (settings as { whatsapp?: string }).whatsapp || settings.phone1
  if (!whatsapp) return null

  const num = getWhatsAppNumber(whatsapp)
  const waUrl = `https://wa.me/${num}`

  return (
    <Link
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile yazın"
      className="fixed bottom-20 end-6 z-40 flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-200"
    >
      <FaWhatsapp className="size-8" />
    </Link>
  )
}
