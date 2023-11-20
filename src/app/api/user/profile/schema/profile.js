import mongoose from 'mongoose'

const ProfileSchema = new mongoose.Schema({
  lastname: {
    type: String,
    required: [true, 'El apellido es requerido'],
    trim: true,
    lowercase: true
  },
  address: {
    type: String,
    required: [true, 'La dirección es requerida'],
    trim: true,
    min: [3, 'Debe tener minimo 3 caracteres'],
    lowercase: true
  },
  zipcode: {
    type: String,
    required: [true, 'El código postal es requerido'],
    trim: true,
    min: [5, 'El código postal debe tener mínimo 5 dígitos']
  },
  phone: {
    type: Number,
    required: [true, 'El número teléfonico es requerido'],
    length: [10, 'Debe ser a 10 dígitos']
  },
  references: {
    type: String,
    max: 50
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'modeluser'
  },
  created_At: {
    type: Date,
    default: Date.now()
  }
})
// eslint-disable-next-line dot-notation
const aditionalInfo = mongoose.models['modeladitionalinfo'] || mongoose.model('modeladitionalinfo', ProfileSchema)

export default aditionalInfo
