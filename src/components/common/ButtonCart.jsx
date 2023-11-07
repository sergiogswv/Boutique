'use client'

import { useStore } from '@/zustand'
import { Button } from '@nextui-org/react'
import { useState } from 'react'

const ButtonCart = ({ item }) => {
  const [quantity, setQuantity] = useState(0)
  const [size, setSize] = useState('')
  const [increaseItems, items] = useStore(state => [state.increaseItems, state.items])

  console.log(item)
  console.log(items)
  const handleCart = (item) => {
    console.log({ item, quantity, size })
    increaseItems({ item, quantity, size })
  }

  const handleAdd = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
  }
  const handleRest = () => {
    if (quantity === 0) return
    const newQuantity = quantity - 1
    setQuantity(newQuantity)
  }

  return (
    <div className='w-full grid gap-4 place-items-center'>
      <div className='flex gap-4 mb-8'>
        <Button size='sm' className={`${size === 'S' && 'focus:border-2 focus:border-gray-700 border-2 border-gray-700'} bg-gray-200 text-gray-950 font-bold text-xl`} onClick={() => setSize('S')}>
          S
        </Button>
        <Button size='sm' className={`${size === 'M' && 'focus:border-2 focus:border-gray-700 border-2 border-gray-700'} bg-gray-200 text-gray-950 font-bold text-xl`} onClick={() => setSize('M')}>
          M
        </Button>
        <Button size='sm' className={`${size === 'X' && 'focus:border-2 focus:border-gray-700 border-2 border-gray-700'} bg-gray-200 text-gray-950 font-bold text-xl`} onClick={() => setSize('X')}>
          X
        </Button>
      </div>
      <div className='flex items-center gap-4 bg-white rounded-xl'>
        <button className='text-2xl text-black bg-blue-300/80 hover:bg-blue-400/80 w-[50px] h-[50px] rounded-full' color='default' radius='md' onClick={handleRest}>
          -
        </button>
        <p className='font-bold text-4xl'>{quantity}</p>
        <button className='text-2xl text-black bg-blue-300/80 hover:bg-blue-400/80 w-[50px] h-[50px] rounded-full' color='default' radius='md' onClick={handleAdd}>
          +
        </button>
      </div>
      <Button className='text-xl text-black uppercase w-8/12 my-2 bg-blue-300/80 hover:bg-blue-400/80' variant='flat' color='default' radius='lg' size='md' onClick={() => handleCart(item)}>
        Agregar al carrito
      </Button>
    </div>
  )
}

export default ButtonCart
