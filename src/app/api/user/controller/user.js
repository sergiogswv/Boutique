import { urlApi } from '@/components/utils/apiConfig'
import { addAditionalInfo, createUserModel, getCurrentUser, getUserAuthModel, updateInfoUser } from '../models/user'
import * as jose from 'jose'
import mongoose from 'mongoose'

export const createUser = async (res) => {
  try {
    await mongoose.connect(urlApi)

    const userResponse = await createUserModel({
      email: res.email,
      password: res.password,
      name: res.name
    })
    return userResponse
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const login = async (request) => {
  const secret = new TextEncoder().encode(
    process.env.SECRETTRACKSWORDS
  )
  try {
    await mongoose.connect(urlApi)

    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')
    const password = searchParams.get('password')

    const payload = await getUserAuthModel({
      email,
      password
    })

    if (payload?.error) {
      return payload.error
    }

    const token = await new jose.SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('30d')
      .sign(secret)
    return token
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const getUser = async (request) => {
  try {
    await mongoose.connect(urlApi)

    const user = await getCurrentUser({ id: request?.id })

    return user
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const aditionalInfo = async ({ info, dataUser }) => {
  const { address, lastname, phone, references, zipcode } = info
  const { id } = dataUser
  try {
    await mongoose.connect(urlApi)

    const user = await addAditionalInfo({
      address,
      lastname,
      phone,
      references,
      userId: id,
      zipcode
    })

    return user
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}

export const updateInfo = async ({ info, dataUser }) => {
  const { address, lastname, phone, references, zipcode, name } = info
  const { id } = dataUser
  try {
    await mongoose.connect(urlApi)

    const user = await updateInfoUser({
      name,
      address,
      lastname,
      phone,
      references,
      userId: id,
      zipcode
    })

    return user
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}
