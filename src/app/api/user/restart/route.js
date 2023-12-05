import { NextResponse } from 'next/server'
import { userResetPass, userToResetPass } from '../controller/user'

export async function GET (request) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    const userWithToken = await userToResetPass({ email })
    const userResponse = {
      tokenConfirm: userWithToken.tokenConfirm,
      email: userWithToken.email,
      _id: userWithToken._id
    }
    return NextResponse.json(userResponse)
  } catch (error) {
    console.log(error)
  }
}

export async function POST (request) {
  try {
    const req = await request.json()

    const response = await userResetPass({ email: req.email, tokenConfirm: req.tokenConfirm, password: req.password })
    return NextResponse.json(response)
  } catch (error) {
    console.log(error)
  }
}
