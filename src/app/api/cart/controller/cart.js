import { urlApi } from '@/components/utils/apiConfig'
import mongoose from 'mongoose'
import { createShopCart, deleteItemCart, getFullCart } from '../models/cart'

export const getCartProducts = async ({ userId }) => {
  try {
    await mongoose.connect(urlApi)

    const response = await getFullCart({ userId })
    return response
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

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

export const deleteItem = async ({ idProduct, userId }) => {
  try {
    await mongoose.connect(urlApi)

    const deleteResponse = await deleteItemCart({ idProduct, userId })
    return deleteResponse
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}
