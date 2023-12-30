'use client'

import Image from 'next/image'
import ButtonCart from '../common/ButtonCart'
import { useState } from 'react'
// import { fetchFn } from '../utils/fetchFn'
// import { Spinner } from '@nextui-org/react'

const ModuleProduct = ({ id, product }) => {
  const [main, setMain] = useState({ index: 0, img: null })
  // const [currentProduct, setCurrentProduct] = useState({})
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const getProduct = async () => {
  //     setLoading(true)
  //     const product = await fetchFn({
  //       endpoint: `/products/product?id=${id[0]}`,
  //       method: 'GET',
  //       body: null,
  //       front: true
  //     })
  //     setMain({ index: 0, img: product.image })
  //     setCurrentProduct(product)
  //   }

  //   getProduct()
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1000)
  // }, [])

  const handleMain = (value, img) => {
    setMain({
      index: value,
      img
    })
  }

  return (
    <>
      <div className='p-2 md:p-5'>
        {product.image && main.img === null
          ? (
            <Image
              alt={`${product.name} ${product.category}`}
              src={`/clothes/${product.image}`}
              width={800}
              height={500}
              className='h-[350px] md:h-[600px] object-cover w-full rounded-xl'
            />
            )
          : (<Image
              alt={`${product.name} ${product.category}`}
              src={`/clothes/${main.img}`}
              width={800}
              height={500}
              className='h-[350px] md:h-[600px] object-cover w-full rounded-xl'
             />)}

        <div className='grid grid-cols-3 w-full place-items-center mt-4'>
          {product.aditionals?.map((img, index) => (
            <Image
              key={index}
              alt={img}
              src={`/clothes/${img}`}
              width={800}
              height={500}
              className='w-11/12 h-[100px] md:h-[200px] object-cover rounded-xl col-span-1 cursor-pointer'
              onClick={() => handleMain(index, img)}
            />
          ))}
        </div>
      </div>
      <div className='grid h-[400px] md:h-[700px]'>
        <div>
          <h2 className='text-3xl md:text-8xl font-bold'>
            {product.name}
          </h2>
          <span className='italic text-lg md:text-2xl'>
            para {product.category}
          </span>
        </div>
        <p>{product.description}</p>
        {!product.selled
          ? (
            <ButtonCart size={product.size} product={product} />
            )
          : (
            <p className='text-lg'>No hay en existencia</p>
            )}
      </div>
    </>
  )
}

export default ModuleProduct
