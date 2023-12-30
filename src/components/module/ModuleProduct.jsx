'use client'

import Image from 'next/image'
import ButtonCart from '../common/ButtonCart'
import { useEffect, useState } from 'react'
import { fetchFn } from '../utils/fetchFn'

const ModuleProduct = ({ id }) => {
  const [main, setMain] = useState({ index: 0, img: null })
  const [currentProduct, setCurrentProduct] = useState({})

  useEffect(() => {
    const getProduct = async () => {
      const product = await fetchFn({ endpoint: `/products/product?id=${id}`, method: 'GET', body: null, front: true })
      setCurrentProduct(product)
    }

    getProduct()
  }, [])

  const handleMain = (value, img) => {
    setMain({
      index: value,
      img
    })
  }

  return (
    <>
      <div className='p-2 md:p-5'>
        {main.img === null
          ? (
            <Image
              alt={`${currentProduct.name} ${currentProduct.category}`}
              src={`/clothes/${currentProduct.image}`}
              width={800}
              height={500}
              className='h-[350px] md:h-[600px] object-cover w-full rounded-xl'
            />
            )
          : (
            <Image
              alt={`${currentProduct.name} ${currentProduct.category}`}
              src={`/clothes/${main.img}`}
              width={800}
              height={500}
              className='h-[350px] md:h-[600px] object-cover w-full rounded-xl'
            />
            )}

        <div className='grid grid-cols-3 w-full place-items-center mt-4'>
          {currentProduct.aditionals?.map((img, index) =>
            <Image
              key={index}
              alt={img}
              src={`/clothes/${img}`}
              width={800}
              height={500}
              className='w-11/12 h-[100px] md:h-[200px] object-cover rounded-xl col-span-1 cursor-pointer'
              onClick={() => handleMain(index, img)}
            />
          )}
        </div>
      </div>
      <div className='grid h-[400px] md:h-[700px]'>
        <div>
          <h2 className='text-3xl md:text-8xl font-bold'>{currentProduct.name}</h2>
          <span className='italic text-lg md:text-2xl'>para {currentProduct.category}</span>
        </div>
        <p>{currentProduct.description}</p>
        {!currentProduct.selled ? <ButtonCart size={currentProduct.size} product={currentProduct} /> : <p className='text-lg'>No hay en existencia</p>}
      </div>
    </>
  )
}

export default ModuleProduct
