'use client'

import Image from 'next/image'
import ButtonCart from '../common/ButtonCart'

const ModuleProduct = ({ product }) => {
  const { name, category, image, sizes, quantity } = product

  return (
    <>
      <div className='p-2 md:p-5'>
        <Image
          alt={`${name} ${category}`}
          src={`/clothes/${image}`}
          width={800}
          height={500}
          className='h-[350px] md:h-[700px] object-cover w-full rounded-xl'
        />
      </div>
      <content className='grid'>
        <div>
          <h2 className='text-3xl md:text-8xl font-bold'>{name}</h2>
          <span className='italic text-lg md:text-2xl'>para {category}</span>
        </div>
        {quantity > 0 ? <ButtonCart sizes={sizes} product={product} /> : <p className='text-lg'>No hay en existencia</p>}
      </content>
    </>
  )
}

export default ModuleProduct
