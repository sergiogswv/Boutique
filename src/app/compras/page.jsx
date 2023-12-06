import Title from '@/components/common/Title'
import ModuleShops from '@/components/module/ModuleShops'
import React from 'react'

const ShopPage = () => {
  return (
    <div className='grid w-full md:w-6/12 mx-auto mt-5'>
      <Title titleText='Mis compras' />

      <ModuleShops />
    </div>
  )
}

export default ShopPage
