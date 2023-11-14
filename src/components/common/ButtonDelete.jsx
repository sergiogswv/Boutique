'use client'

import { Button } from '@nextui-org/react'
import React from 'react'

const ButtonDelete = ({ index }) => {
  console.log(index)
  const handleDelete = (index) => {
    console.log(index)
  }
  return (
    <div className='flex flex-col col-span-4 md:col-span-2'>
      <Button color='danger' variant='bordered' onPress={() => handleDelete(index)}>
        Eliminar articulo
      </Button>
    </div>
  )
}

export default ButtonDelete
