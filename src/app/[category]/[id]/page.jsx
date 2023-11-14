import ModuleProduct from '@/components/module/ModuleProduct'
import { fetchFn } from '@/components/utils/fetchFn'
import React from 'react'

const ProductPage = async ({ params }) => {
  console.log(params.id)
  const product = await fetchFn({ endpoint: `/products/product?id=${params.id}`, method: 'GET', body: null })
  console.log(product)
  return (
    <div className='w-10/12 grid grid-cols-[1fr_500px] mx-auto p-5 gap-5'>
      <ModuleProduct
        product={product}
      />

    </div>
  )
}

export default ProductPage
