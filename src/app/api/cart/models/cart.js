import cart from '../schema/cart'

export const createShopCart = async ({ products }) => {
  try {
    const newItemCart = cart({ products })
    await newItemCart.save()
    return newItemCart
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}
