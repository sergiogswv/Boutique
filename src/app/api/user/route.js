import { NextResponse } from 'next/server'
import { createUser, getUserAuth } from './controller/user'

export async function POST (req, res) {
  try {
    const res = await req.json()
    const userResponse = await createUser(res)

    return NextResponse.json(userResponse)
  } catch (error) {
    console.log(`Hubo un error: ${error}`)
  }
//   return NextResponse.json({ message: 'Hello' })
}

export async function GET (request, response) {
  try {
    const token = await getUserAuth(request)

    return NextResponse.json(token)
  } catch (error) {
    console.log(`Hubo un error: ${error}`)
  }
}
