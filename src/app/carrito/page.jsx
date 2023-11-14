'use client'

import ButtonDelete from '@/components/common/ButtonDelete'
import { useStore } from '@/zustand'
import { Card, CardBody } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  const itemsCart = useStore(state => state.items)
  console.log(itemsCart)
  return (
    <div className='w-10/12 grid mt-10 mx-auto'>
      {itemsCart.length > 0
        ? itemsCart.map((item, index) => (
          <Card
            isBlurred
            className='border-none bg-background/60 dark:bg-default-100/50 min-w-full w-10/12'
            shadow='sm'
            key={item._id}
          >
            <CardBody>
              <div className='grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center'>
                <div className='relative col-span-4 md:col-span-4'>
                  <Image
                    alt='Album cover'
                    className='object-cover w-[200px] h-[200px] rounded-xl'
                    height={200}
                    width={200}
                    shadow='md'
                    src={`/clothes/${item.image}`}
                  />
                </div>

                <div className='flex flex-col col-span-4 md:col-span-6'>
                  <div className='flex justify-between items-start'>
                    <div className='flex flex-col gap-0'>
                      <h2 className='font-semibold text-foreground/90 text-5xl'>{item.name}</h2>
                      <p className='text-md italic text-foreground/60 uppercase'>{item.category}</p>
                      <h3 className='font-medium mt-2 text-3xl'>Talla: {item.sizes}</h3>
                      <p className='text-lg text-foreground/80 font-bold'>Piezas: {item.quantity}</p>
                    </div>
                  </div>
                </div>
                <ButtonDelete index={index} />
              </div>
            </CardBody>
          </Card>
        ))
        : (
          <div className='w-10/12 grid mt-10 mx-auto'>
            <p className='text-5xl text-center italic font-thin'>Carrito de compras vacío</p>
          </div>
          )}
    </div>
  )
}

export default CartPage
