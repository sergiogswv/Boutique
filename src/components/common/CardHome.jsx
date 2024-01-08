'use client'

import { Card, CardFooter, CardHeader } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardHome = ({ item, classes }) => {
  const { _id, title, description, img, href } = item
  return (
    <Card isFooterBlurred className={`w-full h-[300px] col-span-2 ${classes}`} key={_id}>
      <CardHeader className='absolute z-10 top-1 flex-col items-start'>
        <p className='text-tiny text-black/80 uppercase font-bold bg-gray-200 px-4 rounded-t-lg'>{title}</p>
        <h3 className='text-black text-sm md:text-sm lg:text-2xl bg-gray-200 px-1 md:px-1 rounded-b-lg'>{description}</h3>
      </CardHeader>
      <Image
        alt={`${title} ${description}`}
        width={400}
        height={400}
        className='z-0 w-full h-full scale-125 -translate-y-6 object-cover'
        src={`/clothes/${img}`}
      />
      <CardFooter className='absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
        <div className='hidden lg:flex' />
        <Link href={href} className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 md:px-2 lg:px-5 py-2.5 text-center mx-auto lg:mr-2 lg:mb-2 '>
          Ver colección
        </Link>
      </CardFooter>
    </Card>
  )
}

export default CardHome
