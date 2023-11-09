import { createProduct } from './controller/product'

const { NextResponse } = require('next/server')

export async function POST (req, res) {
  try {
    const request = await req.json()
    const productResponse = await createProduct({ request })

    return NextResponse.json(productResponse)
  } catch (error) {
    console.log(`Hubo un error ${error}`)
  }
}
