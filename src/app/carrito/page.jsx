'use client'

import ModuleCart from '@/components/module/ModuleCart'
import { useStore } from '@/zustand'
import React from 'react'

const CartPage = () => {
  const itemsCart = useStore((state) => state.items)
  const token = useStore((state) => state.token)

  return (
    <div className='w-10/12 grid mt-10 mx-auto'>
      {!token
        ? (
          <div className='w-6/12 grid mx-auto border-2 border-slate-300 rounded-lg shadow-lg place-items-center mt-10 p-5'>
            <h2 className='text-4xl font-semibold'>Para continuar, inicia sesión</h2>
            <p className='text-2xl font-semibold'>o registrate en nuestra página</p>
          </div>
          )
        : itemsCart.length > 0
          ? (
              itemsCart.map((item, index) => (
                <ModuleCart item={item} index={index} key={item._id} />
              ))
            )
          : (
            <div className='w-10/12 grid mt-10 mx-auto'>
              <p className='text-5xl text-center italic font-thin'>
                Carrito de compras vacío
              </p>
            </div>
            )}
    </div>
  )
}

export default CartPage
