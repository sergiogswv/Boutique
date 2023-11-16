import { NextResponse } from 'next/server'
import { createUser, login } from './controller/user'

export async function POST (req, res) {
  try {
    const res = await req.json()
    const userResponse = await createUser(res)

    return NextResponse.json(userResponse)
  } catch (error) {
    console.log(`Hubo un error: ${error}`)
  }
}

export async function GET (request) {
  try {
    const token = await login(request)

    return NextResponse.json(token)
  } catch (error) {
    console.log(`Hubo un error: ${error}`)
  }
}
