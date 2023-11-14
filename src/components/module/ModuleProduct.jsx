'use client'

import Image from 'next/image'
import ButtonCart from '../common/ButtonCart'

const ModuleProduct = ({ product }) => {
  const { name, category, image, sizes } = product
  return (
    <>
      <div className='p-5'>
        <Image
          alt={`${name} ${category}`}
          src={`/clothes/${image}`}
          width={700}
          height={500}
          className='h-[700px] object-cover w-full rounded-xl'
        />
      </div>
      <content className='grid'>
        <div>
          <h2 className='text-8xl font-bold'>{name}</h2>
          <span className='italic text-2xl'>para {category}</span>
        </div>
        <ButtonCart sizes={sizes} product={product} />

      </content>
    </>
  )
}

export default ModuleProduct
