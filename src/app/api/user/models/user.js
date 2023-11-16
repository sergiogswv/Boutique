import user from '../schema/user'
import bcrypt from 'bcryptjs'

export const createUserModel = async ({ email, password, name }) => {
  if (password.length === 0 || password === '') {
    return { error: { password: 'El campo password no puede ir vacio' } }
  }
  try {
    const userExist = await user.findOne({ email })

    if (userExist) {
      return { error: { email: 'Ya existe una cuenta con este email' } }
    }
    const salt = await bcrypt.genSalt(10)
    const passHashed = await bcrypt.hash(password, salt)
    const newUser = user({ email, password: passHashed, name })
    await newUser.save()
    return { msg: 'Usuario creado correctamente', status: 200 }
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const getUserAuthModel = async ({ email, password }) => {
  try {
    const userExist = await user.findOne({ email })
    if (!userExist) {
      return { error: { email: 'No existe un usuario con este email.' } }
    }

    const passwordValidate = await bcrypt.compare(password, userExist.password)
    if (!passwordValidate) {
      return { error: { password: 'La contraseña no es correcta.' } }
    }

    const payload = {
      user: {
        id: userExist._id,
        email: userExist.email
      }
    }

    return payload
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}
