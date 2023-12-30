import ModuleProduct from '@/components/module/ModuleProduct'
import { fetchFn } from '@/components/utils/fetchFn'
import React from 'react'

const ProductPage = async ({ params }) => {
  const product = await fetchFn({ endpoint: `/products/product?id=${params.id}`, method: 'GET', body: null })
  return (
    <div className='w-full h-auto md:h-[1000px] md:w-10/12 grid grid-rows-2 md:grid-cols-[1fr_500px] mx-auto px-1 py-3 md:p-5 gap-5'>
      <ModuleProduct
        product={product}
      />

    </div>
  )
}

export default ProductPage
