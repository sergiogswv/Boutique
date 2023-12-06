import mongoose from 'mongoose'
import { ProductSchema } from '../../products/schema/product'

const CartSchema = new mongoose.Schema({
  products: [{
    type: ProductSchema.omit(['category', 'active', 'quantity', 'selled'])
  }],
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'modeluser'
  },
  completed: {
    type: Boolean
  },
  finishedAt: {
    type: Date,
    default: Date.now()
  }
})

// eslint-disable-next-line dot-notation
const cart = mongoose.models['modelcart'] || mongoose.model('modelcart', CartSchema)

export default cart
