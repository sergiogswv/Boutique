import { urlApi } from '@/components/utils/apiConfig'
import mongoose from 'mongoose'
import { createShopCart } from '../models/cart'

export const createCart = async ({ request }) => {
  const { products } = request
  try {
    await mongoose.connect(urlApi)
    console.log('db conectada')

    const addCart = createShopCart({
      products
    })
    return addCart
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}
