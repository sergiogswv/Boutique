import ModuleProduct from '@/components/module/ModuleProduct'
import { fetchFn } from '@/components/utils/fetchFn'
import React from 'react'

const ProductPage = async ({ params }) => {
  console.log(params.id)
  const product = await fetchFn({ endpoint: `/products/product?id=${params.id[0]}`, method: 'GET', body: null })
  console.log(product)
  return (
    <div className='w-full h-auto md:h-[1000px] md:w-10/12 grid grid-rows-2 md:grid-cols-[1fr_500px] mx-auto px-1 py-3 md:p-5 gap-5'>
      <ModuleProduct
        id={params.id}
        product={product}
      />

    </div>
  )
}

export default ProductPage
