'use client'

import { useStore } from '@/zustand'
import React from 'react'
import { Badge } from '@nextui-org/react'

const Cart = () => {
  const items = useStore(state => state.items)
  return (
    <div>
      <Badge content={items?.length} color='danger' placement='top-right'>
        <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-garden-cart' width='32' height='32' viewBox='0 0 24 24' strokeWidth='1.5' stroke='#2c3e50' fill='none' strokeLinecap='round' strokeLinejoin='round'>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M17.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0' />
          <path d='M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055' />
          <path d='M6 8h15l-3.5 7l-7.1 -.747a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323' />
        </svg>
      </Badge>

    </div>
  )
}

export default Cart
