import { urlApi } from '@/components/utils/apiConfig'
import mongoose from 'mongoose'
import { createMenuItem, getMenuItems, updateItem } from '../model/home'

export const createItem = async ({ request }) => {
  const { img, active, title, description, href } = request
  try {
    await mongoose.connect(urlApi)

    const itemCreated = await createMenuItem({

      img,
      active,
      title,
      description,
      href
    })
    return itemCreated
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const getAllItems = async () => {
  try {
    await mongoose.connect(urlApi)

    const items = await getMenuItems()
    return items
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const updateItemMenu = async ({ request }) => {
  const { id, img, active, title, description, href } = request
  try {
    await mongoose.connect(urlApi)

    const itemUpdated = await updateItem({ id, img, active, title, description, href })
    return itemUpdated
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}
