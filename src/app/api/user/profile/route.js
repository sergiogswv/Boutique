import { NextResponse } from 'next/server'
import { aditionalInfo, getUser, updateInfo } from '../controller/user'

export async function GET (request) {
  const user = request.headers.get('currentUser')
  try {
    if (user === 'null') {
      return NextResponse.json({ data: '' })
    }
    const request = JSON.parse(user)

    const data = await getUser(request)
    return NextResponse.json(data)
  } catch (error) {
    console.log(`Hubo un error: ${error}`)
  }
}

export async function POST (req, res) {
  const user = req.headers.get('currentUser')
  try {
    const info = await req.json()
    const dataUser = JSON.parse(user)

    const data = await aditionalInfo({ info, dataUser })
    return NextResponse.json(data)
  } catch (error) {
    console.log(`Hubo un error: ${error}`)
  }
}

export async function PUT (req, res) {
  const user = req.headers.get('currentUser')
  try {
    const info = await req.json()
    const dataUser = JSON.parse(user)

    const data = await updateInfo({ info, dataUser })
    return NextResponse.json(data)
  } catch (error) {
    console.log(`Hubo un error: ${error}`)
  }
}
