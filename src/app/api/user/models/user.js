import mongoose, { model } from 'mongoose'

const UserModel = mongoose.Schema({
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
    trim: true,
    validate: {
      validator: function (v) {
        return /^(?=.*d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^wds:])([^s]){8,16}/.test(v)
      },
      message: props => 'No es un password válido!'
    }
  },
  created_At: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.models.UserModel || model('modeluser', UserModel)
