import { urlApi } from '@/components/utils/apiConfig'
import mongoose from 'mongoose'
import { createCategoryModel, getCategoriesModel } from '../models/category'

export const createCategory = async ({ request }) => {
  const { name } = request
  try {
    await mongoose.connect(urlApi)
    console.log('db conectada')

    const categoryResponse = await createCategoryModel({
      name
    })
    return categoryResponse
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const getCategories = async () => {
  try {
    const allCategories = await getCategoriesModel()
    return allCategories
  } catch (error) {
    return { error: error.errors }
  }
}
