import homeMenu from '../schema/home'

export const createMenuItem = async ({ img, active, title, description, href }) => {
  try {
    const newItem = homeMenu({ img, active, title, description, href })
    await newItem.save()
    return { msg: 'Item para menú creado correctamente', status: 200 }
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const getMenuItems = async () => {
  try {
    const query = homeMenu.where({ active: true })
    const itemsMenu = await query.find()

    return itemsMenu
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const updateItem = async ({ id, img, active, title, description, href }) => {
  try {
    const itemExist = await homeMenu.findById({ _id: id })

    if (!itemExist) {
      return { error: { id: 'No existe este item.' } }
    }

    const item = await homeMenu.findByIdAndUpdate(id, { img, active, title, description, href })
    return item
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const deleteItem = async ({ id }) => {
  try {
    const itemExist = await homeMenu.findById(id)

    if (!itemExist) {
      return { error: { id: 'No existe este item.' } }
    }

    await homeMenu.findByIdAndDelete(id)
    return { msg: 'Item eliminado correctamente', status: 200 }
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const changeActiveItem = async ({ id }) => {
  try {
    const itemExist = await homeMenu.findById(id)

    if (!itemExist) {
      return { error: { name: 'No existe este item.' } }
    }

    await homeMenu.findByIdAndUpdate(id, { $set: { active: !itemExist.active } })
    return { msg: 'Item cambio de estado correctamente', status: 200 }
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}
