import mongoose from 'mongoose'

export const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Campo del nombre es obligatorio'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'El producto debe de tener una categoría'],
    trim: true,
    lowercase: true
  },
  quantity: {
    type: Number,
    required: [true, 'Debe tener una cantidad, como mínimo 1']
  },
  image: {
    type: String,
    required: [true, 'Debe de tener una imagen a mostrar']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  active: {
    type: Boolean,
    default: true
  },
  sizes: [
    {
      size: {
        type: String
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  price: {
    type: Number,
    required: [true, 'Debe tener un precio establecido']
  },
  size: {
    type: String
  }
})

// eslint-disable-next-line dot-notation
const product = mongoose.models['modelproduct'] || mongoose.model('modelproduct', ProductSchema)

export default product
