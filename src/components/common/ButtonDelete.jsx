'use client'

import { useStore } from '@/zustand'
import { Button } from '@nextui-org/react'
import React from 'react'

const ButtonDelete = ({ item }) => {
  const deleteItems = useStore(state => state.deleteItems)
  const handleDelete = (item) => {
    deleteItems(item)
  }
  return (
    <div className='flex flex-col col-span-4 md:col-span-2'>
      <Button color='danger' variant='bordered' onPress={() => handleDelete(item)}>
        Eliminar articulo
      </Button>
    </div>
  )
}

export default ButtonDelete
