'use client'

import { useStore } from '@/zustand'
import React, { useEffect, useState } from 'react'
import { fetchFn } from '../utils/fetchFn'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { formatDate } from '../utils/formatFn'
import Image from 'next/image'

const ModuleShops = () => {
  const [token] = useStore((state) => [state.token])
  const [shops, setShops] = useState([])

  useEffect(() => {
    let local = ''
    local = JSON.parse(token)
    const getShops = async () => {
      const items = await fetchFn({
        endpoint: '/cart',
        method: 'GET',
        front: true,
        token: local.token
      })
      setShops(items)
    }

    getShops()
  }, [])

  return (
    <div>
      {shops.length > 0
        ? (
          <Accordion variant='splitted'>
            {shops.map((shop, index) => (
              <AccordionItem
                key={shop._id}
                aria-label={`Accordion ${index}`}
                title=''
                subtitle={
                  <p className='text-slate-500 font-bold ml-1 text-lg md:text-2xl mb-2 border-slate-500 border-b-1'>
                    {formatDate(shop.finishedAt)}
                  </p>
            }
              >
                {shop.products.map(product => (
                  <div key={product._id} className='flex justify-evenly items-center'>
                    <Image
                      alt='Album cover'
                      className='object-cover w-[75px] h-[75px] md:w-[100px] md:h-[100px] rounded-xl'
                      height={200}
                      width={200}
                      shadow='md'
                      src={`/clothes/${product.image}`}
                    />
                    <p className='text-2xl md:text-4xl font-bold'>{product.name}</p>
                    <p className='text-xl md:text-3xl'>${product.price}</p>
                  </div>
                ))}
              </AccordionItem>
            ))}
          </Accordion>
          )
        : <p>Aun no tienes compras realizadas</p>}
    </div>
  )
}

export default ModuleShops
