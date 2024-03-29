'use client'

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
            <img
              alt={`${product.name} ${product.category}`}
              src={`/clothes/${product.image}`}
              className='h-[350px] md:h-[900px] object-cover w-full rounded-xl'
            />
            )
          : (<img
              alt={`${product.name} ${product.category}`}
              src={`/clothes/${main.img}`}
              className='h-[350px] md:h-[900px] object-cover w-full rounded-xl'
             />)}

        <div className='grid grid-cols-3 w-full place-items-center mt-4'>
          {product.aditionals?.map((img, index) => (
            <img
              key={index}
              alt={img}
              src={`/clothes/${img}`}
              className='w-11/12 h-[100px] md:h-[200px] object-cover rounded-xl col-span-1 cursor-pointer mb-10'
              onClick={() => handleMain(index, img)}
            />
          ))}
        </div>
      </div>
      <div className='grid h-[400px] md:h-[700px]'>
        <div>
          <h2 className='text-3xl md:text-7xl font-bold md:mb-3'>
            {product.name}
          </h2>
          <span className='italic text-lg md:text-2xl'>
            para {product.category}
          </span>
        </div>
        <p className='text-lg md:text-2xl text-justify font-extralight md:mb-10 md:mt-10'>{product.description}</p>
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
