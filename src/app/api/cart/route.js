import { NextResponse } from 'next/server'
import { createCart, deleteItem } from './controller/cart'

export async function POST (req, res) {
  const user = req.headers.get('currentUser')
  try {
    const request = await req.json()
    const response = await createCart({ request, userId: user.id })

    return NextResponse.json(response)
  } catch (error) {
    console.log(error)
    return { error: `Hubo un error: ${error}` }
  }
}

export async function DELETE (req) {
  const user = req.headers.get('currentUser')
  try {
    const request = await req.json()
    const response = await deleteItem({ request, userId: user.id })

    return NextResponse.json(response)
  } catch (error) {
    console.log(error)
    return { error: `Hubo un error: ${error}` }
  }
}
