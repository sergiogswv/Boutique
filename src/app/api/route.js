import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import { createUser } from './user/controller/user'

export async function POST (req, res) {
  try {
    await mongoose.connect(`${process.env.SHOP_APP_URL_MONGODB_URL}${process.env.SHOP_APP_URL_MONGODB_USER}:${process.env.SHOP_APP_URL_MONGODB_PASSWORD}@${process.env.SHOP_APP_URL_MONGODB_CLUSTER}.${process.env.SHOP_APP_URL_MONGODB_END}/${process.env.SHOP_APP_URL_MONGODB_DATABASE}`)
    console.log('db conectada')

    const res = await req.json()
    const userResponse = await createUser({ email: res.email, password: res.password, name: res.name })
    return NextResponse.json(userResponse)
  } catch (error) {
    console.log(`Hubo un error: ${error}`)
  }
  return NextResponse.json({ message: 'Hello' })
}
