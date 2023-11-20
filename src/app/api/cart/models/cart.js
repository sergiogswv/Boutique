import cart from '../schema/cart'

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

export const deleteItemCart = async ({ id }) => {
  try {
    await cart.findByIdAndDelete({ _id: id })
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}
