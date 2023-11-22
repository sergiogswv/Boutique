'use client'

import ModuleCart from '@/components/module/ModuleCart'
import ModuleNoToken from '@/components/module/ModuleNoToken'
import CartSkeleton from '@/components/module/skeletons/CartSkeleton'
import { useStore } from '@/zustand'
import { Button } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

export const publicConektaKey = process.env.NEXT_PUBLIC_CONEKTA_PUBLIC_KEY

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

  const handlePayment = () => {
    const config = {
      publicKey: publicConektaKey,
      targetIFrame: 'example'
    }

    const callbacks = {
      onCreateTokenSucceeded: (token) => postPayment(token),
      onCreateTokenError: (error) => console.log('Error: ', error),
      onGetInfoSuccess: (event) => console.log(event)
    }

    window.ConektaCheckoutComponents.Card({ config, callbacks })
  }

  const postPayment = async (tokenConekta) => {
    console.log(tokenConekta.id)
    const data = {
      line_items: [{
        name: 'Nombre del Producto o Servicio',
        unit_price: 23000,
        quantity: 1
      }],
      currency: 'MXN',
      customer_info: {
        name: 'Jorge Martínez',
        email: 'jorge.martinez@conekta.com',
        phone: '+5218181818181'
      },
      metadata: {
        datos_extra: '1234'
      },
      charges: [{
        payment_method: {
          type: 'card',
          token_id: 'tok_test_visa_1881'
        }
      }]
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/cart`, {
      method: 'POST',
      body: JSON.stringify(data)
    })

    console.log(response)
  }

  return (
    <>
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
                  <>
                    {itemsCart.map((item, index) => (
                      <ModuleCart item={item} index={index} key={item._id} />
                    ))}
                    <div className='flex justify-end mt-10'>
                      <Button color='success' variant='shadow' className='w-[300px] uppercase text-white' onPress={handlePayment}>
                        Proceder al pago
                      </Button>
                      <div id='example' className='absolute z-50 top-0 left-0 w-auto h-auto' />
                    </div>
                  </>
                  )
                : (
                  <div className='w-10/12 grid mt-10 mx-auto'>
                    <p className='text-5xl text-center italic font-thin'>
                      Carrito de compras vacío
                    </p>
                  </div>
                  )}

      </div>
    </>
  )
}

export default CartPage
