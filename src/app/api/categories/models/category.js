import category from '../schema/category'

export const createCategoryModel = async ({ name, href }) => {
  try {
    const categoryExist = await category.findOne({ name })

    if (categoryExist) {
      return { error: { name: 'Ya existe una categoría con este nombre' } }
    }
    const newCat = category({ name, href })
    await newCat.save()
    return { msg: 'Categoría creada correctamente', status: 200 }
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const getCategoriesModel = async () => {
  try {
    const categories = await category.find()

    return categories
  } catch (error) {
    return { error: error.errors }
  }
}
