'use client'

import Link from 'next/link'
import React from 'react'

const ButtonDesc = ({ item, currentSlug }) => {
  const path = window.location.origin
  return (
    <Link className='text-tiny text-black bg-gray-100/80 hover:bg-black hover:text-white font-bold p-2 rounded-lg' href={`${path}/${currentSlug}/${item.id}`}>
      Ver Producto
    </Link>
  )
}

export default ButtonDesc
