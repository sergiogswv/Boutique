'use client'

import { useStore } from '@/zustand'
import { Button } from '@nextui-org/react'
import { useEffect, useRef, useState } from 'react'

const ButtonCart = ({ sizes, product }) => {
  const increaseItems = useStore(state => state.increaseItems)

  const [sizeSelected, setSizeSelected] = useState('')
  const [quantityAvailable, setQuantityAvailable] = useState({})
  const [errorSize, setErrorSize] = useState(false)
  const [errorCount, setErrorCount] = useState(false)
  const finalQuantity = useRef(0)

  useEffect(() => {
    const quantity = sizes.filter(s => sizeSelected === s.size)
    if (Object.entries(quantity).length > 0) {
      setQuantityAvailable(quantity[0].quantity)
    }
  }, [sizeSelected])

  const handleSelected = (size) => {
    setSizeSelected(size)
    setErrorSize(false)
  }

  const renderOptions = () => {
    const listOptions = []
    for (let i = 1; i <= quantityAvailable; i++) {
      listOptions.push(<option value={i}>{i}</option>)
    }
    return listOptions
  }

  const handleAddCart = async () => {
    if (sizeSelected === '') {
      setErrorSize(true)
      return
    }

    if (finalQuantity.current.value === '0') {
      setErrorCount(true)
      return
    }

    setErrorCount(false)
    const toCart = { ...product, quantity: finalQuantity.current.value, size: sizeSelected }
    increaseItems(toCart)
    // const data = { endpoint: '/cart', method: 'POST', body: toCart, front: true, token }
    // const response = await fetchFn(data)
    // console.log(response)
  }

  return (
    <div className='w-full grid gap-2'>
      <div className='flex gap-4 mb-1 items-center'>
        {sizes?.map(size => (
          <Button
            size='sm'
            className={`${size.size === sizeSelected && 'focus:border-2 focus:border-gray-700 border-2 border-gray-700'} bg-gray-200 text-gray-950 font-bold text-xl`}
            onClick={() => handleSelected(size.size)}
            key={size.size}
          >
            {size.size}
          </Button>
        ))}
      </div>
      {errorSize && <p className='italic text-red-700 text-md'>Debes elegir una talla mínimo</p>}
      <div className='flex items-center gap-4 bg-white rounded-xl w-[200px] pb-5'>
        <select
          className='w-[100px] border-2 border-slate-500 rounded-xl text-right mr-5 pr-3'
          name='quantity'
          ref={finalQuantity}
          defaultValue={1}
        >
          <option disabled selected value={0}>0</option>
          {renderOptions()}
        </select>
      </div>
      {errorCount && <p className='italic text-red-700 text-md'>Debes elegir una cantidad de prendas</p>}
      <Button
        className='text-xl text-white uppercase w-full my-2 mx-auto'
        variant='shadow'
        color='primary'
        radius='lg'
        size='md'
        onClick={() => handleAddCart()}
      >
        Agregar al carrito
      </Button>
    </div>
  )
}

export default ButtonCart
