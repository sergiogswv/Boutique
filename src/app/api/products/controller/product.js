import { urlApi } from '@/components/utils/apiConfig'
import mongoose from 'mongoose'
import { changeStatusProduct, createProductModel, getOneProduct, getProductsModel } from '../models/product'

export const createProduct = async ({ request }) => {
  const { name, category, quantity, image, sizes } = request
  try {
    await mongoose.connect(urlApi)

    const productResponse = await createProductModel({
      name,
      category,
      quantity,
      image,
      sizes
    })
    return productResponse
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const getProducts = async (request) => {
  try {
    await mongoose.connect(urlApi)

    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')

    const products = await getProductsModel({ category })
    return products
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const getProduct = async (request) => {
  try {
    await mongoose.connect(urlApi)

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    const product = await getOneProduct({ id })
    return product
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const updateStatus = async (request) => {
  try {
    await mongoose.connect(urlApi)

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    const productUpdate = await changeStatusProduct({ id })
    return productUpdate
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}
