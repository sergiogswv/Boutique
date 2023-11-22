import aditionalInfo from '../profile/schema/profile'
import user from '../schema/user'
import bcrypt from 'bcryptjs'
import TemplateRegister from '@/components/email/TemplateRegister'
import { Resend } from 'resend'

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
    const tokenConfirm = crypto.randomUUID()
    const newUser = user({ email, password: passHashed, name, tokenConfirm })
    await newUser.save()

    const resend = new Resend(process.env.RESEND_API_KEY)

    const data = await resend.emails.send({
      from: 'Tracks Boutique <onboarding@resend.dev>',
      to: [email],
      subject: 'Bienvenido Tracks Boutique',
      react: TemplateRegister({ name, email, tokenConfirm })
    })
    return { msg: 'Usuario creado correctamente', status: 200, data }
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

    if (userExist.tokenConfirm !== '') {
      return { error: { confirm: 'Necesitas confirmar tu cuenta' } }
    }

    const payload = {
      user: {
        id: userExist._id
      }
    }

    return payload
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const getCurrentUser = async ({ id }) => {
  try {
    const userExist = await user.findById({ _id: id }, ['email', 'name'])
    if (!userExist) {
      return { error: { user: 'Este usuario no existe.' } }
    }

    const aditional = await aditionalInfo.findOne({ userId: id })
    return { userExist, aditional }
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const addAditionalInfo = async ({ lastname, address, zipcode, phone, references, userId }) => {
  try {
    const userExist = await user.findById({ _id: userId })
    if (!userExist) {
      return { error: { user: 'Este usuario no existe.' } }
    }

    const info = aditionalInfo({ lastname, address, zipcode, phone, references, userId })
    await info.save()

    return { msg: 'Información adicional creada correctamente', status: 200 }
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const updateInfoUser = async ({ name, lastname, address, zipcode, phone, references, userId }) => {
  try {
    const userExist = await user.findById({ _id: userId })
    if (!userExist) {
      return { error: { user: 'Este usuario no existe.' } }
    }

    await user.findByIdAndUpdate({ _id: userId }, { name })

    await aditionalInfo.findOneAndUpdate({ userId }, { lastname, address, zipcode, phone, references, userId })

    return { msg: 'Información actualizada correctamente', status: 200 }
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}
