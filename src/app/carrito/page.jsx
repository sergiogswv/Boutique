/* eslint-disable camelcase */
'use client'

import ModuleCart from '@/components/module/ModuleCart'
import ModuleNoToken from '@/components/module/ModuleNoToken'
import CartSkeleton from '@/components/module/skeletons/CartSkeleton'
import { useStore } from '@/zustand'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const publicConektaKey = process.env.NEXT_PUBLIC_CONEKTA_PUBLIC_KEY

const CartPage = () => {
  const router = useRouter()
  const itemsCart = useStore((state) => state.items)
  const clearItems = useStore((state) => state.clearItems)
  const user = useStore((state) => state.user)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)
  const [payment, setPayment] = useState(false)
  const [errorConekta, setErrorConekta] = useState(null)
  const [itemData, setItemData] = useState({})
  const [total, setTotal] = useState(0)
  const [selled, setSelled] = useState(null)

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const local = JSON.parse(localStorage.getItem('websession_botique'))
    local === null ? setToken('') : setToken(local.token)

    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  useEffect(() => {
    let fullPrice = 0
    itemsCart?.forEach(item => {
      fullPrice = fullPrice + item.price
    })
    setTotal(fullPrice)

    const itemData = itemsCart?.map(item => {
      const name = item.name
      const unit_price = item.price * 100
      const quantity = 1
      const id = item._id
      const price = item.price
      const image = item.image
      return { name, unit_price, quantity, id, price, image }
    })
    setItemData(itemData)
  }, [itemsCart])

  const handlePayment = () => {
    setPayment(true)
    const config = {
      publicKey: publicConektaKey,
      targetIFrame: 'example'
    }

    const callbacks = {
      onCreateTokenSucceeded: (token) => postPayment(token),
      onCreateTokenError: (error) => setErrorConekta(`Error: ${error}`),
      onGetInfoSuccess: (event) => console.log(event)
    }

    window.ConektaCheckoutComponents.Card({ config, callbacks })
  }

  const postPayment = async (tokenConekta) => {
    const data = {
      line_items: itemData,
      currency: 'MXN',
      customer_info: {
        name: user.name,
        email: user.email
      },
      charges: [{
        payment_method: {
          type: 'card',
          token_id: tokenConekta.id
        }
      }]
    }
    const responseApi = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/cart`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      method: 'POST',
      body: JSON.stringify(data)
    })

    const response = await responseApi.json()

    if (response.payment_status === 'paid') {
      clearItems()
      // eslint-disable-next-line no-undef
      localStorage.removeItem('webboutique_cart')
      router.push('/')
    }

    if (response) {
      setSelled(response)
      setPayment(false)
      document.getElementById('conekta').remove()
    }
  }

  return (
    <>
      {selled !== null && <p className='mx-auto text-center mt-5 bg-red-400 h-[25px] font-bold'>{selled.map(itemSelled => itemSelled)}</p>}
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
                    <div className='flex justify-end mt-10 text-5xl'>
                      <p>Total a pagar: $<span className='font-bold'>{total}</span></p>
                    </div>
                    <div className='flex justify-end mt-10'>
                      <Button color='success' variant='shadow' className='w-[300px] uppercase text-white' onPress={handlePayment}>
                        Proceder al pago
                      </Button>
                      <div className={`${!payment ? 'hidden' : 'flex items-center justify-center'} absolute z-50 top-0 left-0 w-full h-screen bg-opacity-50 bg-slate-500`} id='conekta'>
                        {errorConekta}
                        <div id='example' className='' />
                      </div>
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
