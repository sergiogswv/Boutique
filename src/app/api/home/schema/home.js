import mongoose from 'mongoose'

const HomeSchema = new mongoose.Schema({
  block: {
    type: Number,
    required: [true, 'El campo de bloque es obligatorio'],
    min: [1, 'Debe de tener un número mayor a 0'],
    max: [5, 'Debe de tener un número menor a 5']
  },
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
    required: [true, 'El campo de titulo es obligatorio'],
    lowercase: true
  },
  description: {
    type: String,
    lowercase: true
  },
  href: {
    type: String,
    lowercase: true
  }
})

// eslint-disable-next-line dot-notation
const homeMenu = mongoose.models['modelhome'] || mongoose.model('modelhome', HomeSchema)

export default homeMenu
