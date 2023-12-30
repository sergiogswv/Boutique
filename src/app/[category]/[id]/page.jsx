import ModuleProduct from '@/components/module/ModuleProduct'
import { Spinner } from '@nextui-org/react'
import React, { Suspense } from 'react'

const ProductPage = async ({ params }) => {
  return (
    <div className='w-full h-auto md:h-[1000px] md:w-10/12 grid grid-rows-2 md:grid-cols-[1fr_500px] mx-auto px-1 py-3 md:p-5 gap-5'>
      <Suspense fallback={<Spinner />}>
        <ModuleProduct
          id={params.id}
        />
      </Suspense>

    </div>
  )
}

export default ProductPage
