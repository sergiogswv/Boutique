'use client'

import ModuleCart from '@/components/module/ModuleCart'
import ModuleNoToken from '@/components/module/ModuleNoToken'
import CartSkeleton from '@/components/module/skeletons/CartSkeleton'
import { useStore } from '@/zustand'
import React, { useEffect, useState } from 'react'

const CartPage = () => {
  const itemsCart = useStore((state) => state.items)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // eslint-disable-next-line no-undef
    setToken(localStorage.getItem('websession_botique'))
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <div className='w-10/12 grid mt-10 mx-auto'>
      {loading
        ? (
          <>
            <CartSkeleton />
            <CartSkeleton />
            <CartSkeleton />
          </>
          )
        : !token
            ? (
              <ModuleNoToken />
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
