import mongoose from 'mongoose'
import { ProductSchema } from '../../products/schema/product'

const CartSchema = new mongoose.Schema({
  products: {
    type: ProductSchema.omit(['sizes'])
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'modeluser'
  }
})

// eslint-disable-next-line dot-notation
const cart = mongoose.models['modelcart'] || mongoose.model('modelcart', CartSchema)

export default cart
