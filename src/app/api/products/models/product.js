import product from '../schema/product'

export const createProductModel = async ({ name, category, quantity, image }) => {
  try {
    const productExist = await product.findOne({ name })

    if (productExist) {
      return { errro: { name: 'Ya existe un producto con este nombre' } }
    }
    const newProduct = product({ name, category, quantity, image })
    await newProduct.save()
    return { msg: 'Producto creado correctamente', status: 200 }
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}
