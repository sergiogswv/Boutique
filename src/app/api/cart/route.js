import { NextResponse } from 'next/server'
import { createCart } from './controller/cart'

export async function POST (req, res) {
  try {
    const request = await req.json()
    const response = await createCart({ request })

    return NextResponse.json(response)
  } catch (error) {
    console.log(error)
    return { error: `Hubo un error: ${error}` }
  }
}
