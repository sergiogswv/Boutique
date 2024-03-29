'use client'

import { Card, CardBody } from '@nextui-org/react'
import React from 'react'
import ButtonDelete from '../common/ButtonDelete'

const ModuleCart = ({ item }) => {
  return (
    <Card
      isBlurred
      className='border-none bg-background/60 dark:bg-default-100/50 min-w-full w-10/12'
      shadow='sm'
    >
      <CardBody>
        <div className='grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center'>
          <div className='relative col-span-4 md:col-span-4'>
            <img
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
                <h3 className='font-medium mt-2 text-3xl'>Precio: ${item.price}</h3>
              </div>
            </div>
          </div>
          <ButtonDelete item={item} />
        </div>
      </CardBody>
    </Card>
  )
}

export default ModuleCart
