import cart from '../schema/cart'

export const getFullCart = async ({ userId }) => {
  try {
    const fullCart = await cart.find({ userId })
    return fullCart
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const createShopCart = async ({ products, userId }) => {
  try {
    const newItemCart = cart({ products, userId })
    await newItemCart.save()
    return newItemCart
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const deleteItemCart = async ({ idProduct, userId }) => {
  try {
    const response = await cart.deleteOne({ _id: idProduct, userId })

    return response
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}
