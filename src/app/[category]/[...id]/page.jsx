import ModuleProduct from '@/components/module/ModuleProduct'
import React from 'react'

const ProductPage = ({ params }) => {
  console.log(params.id)
  return (
    <div className='w-full h-auto md:h-[1000px] md:w-10/12 grid grid-rows-2 md:grid-cols-[1fr_500px] mx-auto px-1 py-3 md:p-5 gap-5'>
      <ModuleProduct
        id={params.id}
      />

    </div>
  )
}

export default ProductPage
