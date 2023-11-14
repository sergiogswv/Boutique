import mongoose from 'mongoose'

const HomeSchema = new mongoose.Schema({
  img: {
    type: String,
    required: [true, 'El campo de imagen es obligatorio'],
    trim: true
  },
  active: {
    type: Boolean,
    required: [true, 'El campo de estado activo es obligatorio']
  },
  title: {
    type: String,
    required: [true, 'El campo de titulo es obligatorio']
  },
  description: {
    type: String
  },
  href: {
    type: String,
    lowercase: true
  }
})

// eslint-disable-next-line dot-notation
const homeMenu = mongoose.models['modelhome'] || mongoose.model('modelhome', HomeSchema)

export default homeMenu
