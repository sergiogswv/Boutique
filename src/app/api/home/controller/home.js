import { urlApi } from '@/components/utils/apiConfig'
import mongoose from 'mongoose'
import { createMenuItem, getMenuItems, updateItem } from '../model/home'

export const createItem = async ({ request }) => {
  const { block, img, active, title, description, href } = request
  try {
    await mongoose.connect(urlApi)
    console.log('db conectada')

    const itemCreated = await createMenuItem({
      block,
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
    console.log('db conectada')

    const items = await getMenuItems()
    return items
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const updateItemMenu = async ({ request }) => {
  const { id, block, img, active, title, description, href } = request
  try {
    await mongoose.connect(urlApi)
    console.log('db conectada')

    const itemUpdated = await updateItem({ id, block, img, active, title, description, href })
    return itemUpdated
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}
