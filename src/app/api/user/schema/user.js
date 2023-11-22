import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'El campo email es requerido'],
    trim: true,
    unique: true,
    lowercase: true
  },
  name: {
    type: String,
    required: [true, 'El campo nombre es requerido'],
    trim: true,
    min: [3, 'Debe tener minimo 3 caracteres'],
    max: [30, 'Debe tener máximo 30 caracteres'],
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'El campo password es requerido'],
    trim: true
  },
  created_At: {
    type: Date,
    default: Date.now()
  },
  tokenConfirm: {
    type: String
  }
})
// eslint-disable-next-line dot-notation
const user = mongoose.models['modeluser'] || mongoose.model('modeluser', UserSchema)

export default user
