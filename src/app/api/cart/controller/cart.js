import { urlApi } from '@/components/utils/apiConfig'
import mongoose from 'mongoose'
import { createShopCart, deleteItemCart } from '../models/cart'

export const createCart = async ({ request, userId }) => {
  const { products } = request
  try {
    await mongoose.connect(urlApi)

    const addCart = createShopCart({
      products,
      userId
    })
    return addCart
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const deleteItem = async (request) => {
  try {
    await mongoose.connect(urlApi)

    const { id } = request
    await deleteItemCart({ id })
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}
