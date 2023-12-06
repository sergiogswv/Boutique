import product from '../schema/product'

export const createProductModel = async ({ name, category, quantity, image, sizes }) => {
  try {
    const productExist = await product.findOne({ name })

    if (productExist) {
      return { error: { name: 'Ya existe un producto con este nombre' } }
    }
    const newProduct = product({ name, category, quantity, image, sizes })
    await newProduct.save()
    return { msg: 'Producto creado correctamente', status: 200 }
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const getProductsModel = async ({ category = null }) => {
  try {
    if (category === null) {
      const query = product.where({ active: true }).select(['name', 'category', 'image', 'quantity'])
      const products = await query.find()
      console.log(products)
      return products
    }

    const query = product.where({ category, active: true })
    const productsByCategory = await query.find()

    return productsByCategory
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const getOneProduct = async ({ id }) => {
  try {
    const productExist = await product.findById({ _id: id })

    if (!productExist) {
      return { error: { id: 'El producto indicado no existe' } }
    }

    return productExist
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const updateProductModel = async ({ id, name, category, quantity, image }) => {
  try {
    const productExist = await product.findById({ _id: id })

    if (!productExist) {
      return { error: { id: 'El producto indicado no existe' } }
    }

    const productUpdated = await product.findByIdAndUpdate(id, { name, category, quantity, image })
    return productUpdated
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const changeStatusProduct = async ({ id }) => {
  try {
    const productExist = await product.findById({ _id: id })

    if (!productExist) {
      return { error: { id: 'El producto indicado no existe' } }
    }

    const productUpdated = await product.findByIdAndUpdate(id, { $set: { active: !productExist.active } })

    return productUpdated
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}
