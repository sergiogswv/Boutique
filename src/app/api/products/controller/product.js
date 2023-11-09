import { urlApi } from '@/components/utils/apiConfig'
import mongoose from 'mongoose'
import { createProductModel } from '../models/product'

export const createProduct = async ({ request }) => {
  const { name, category, quantity, image } = request
  try {
    await mongoose.connect(urlApi)
    console.log('db conectada')

    const productResponse = await createProductModel({
      name,
      category,
      quantity,
      image
    })
    return productResponse
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}
