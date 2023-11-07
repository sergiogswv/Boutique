import { urlApi } from '@/components/utils/apiConfig'
import { createUserModel, getUserAuthModel } from '../models/user'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

export const createUser = async (res) => {
  try {
    await mongoose.connect(urlApi)
    console.log('db conectada')

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

export const getUserAuth = async (request) => {
  try {
    await mongoose.connect(urlApi)
    console.log('db conectada')

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

    const token = jwt.sign(payload, process.env.SECRETTRACKSWORDS,
      {
        expiresIn: '30D'
      })
    return token
  } catch (error) {
    console.log(error)
    return { error: error.errors }
  }
}
