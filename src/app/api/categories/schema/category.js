import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Campo del nombre es obligatorio'],
    trim: true,
    lowercase: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

// eslint-disable-next-line dot-notation
const category = mongoose.models['modelcategory'] || mongoose.model('modelcategory', CategorySchema)

export default category
