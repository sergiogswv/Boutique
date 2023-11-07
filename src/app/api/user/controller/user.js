import user from '../models/user'
import bcrypt from 'bcryptjs'

export const createUser = async ({ email, password = '', name }) => {
  if (password.length === 0 || password === '') {
    return { error: 'El campo password no puede ir vacio' }
  }
  try {
    const userExist = await user.findOne({ email })

    if (userExist) {
      return { error: 'Ya existe una cuenta con este email' }
    }
    const salt = await bcrypt.genSalt(10)
    const passHashed = await bcrypt.hash(password, salt)
    const newUser = user({ email, password: passHashed, name })
    await newUser.save()
    return { msg: 'Usuario creado correctamente' }
  } catch (error) {
    // console.log(error)
    return { error: error.errors }
  }
}
