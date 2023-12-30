import { NextResponse } from 'next/server'
import { getProduct } from '../products/controller/product'

export async function GET (request) {
  try {
    const product = await getProduct(request)

    return NextResponse.json(product)
  } catch (error) {
    console.log(`Hubo un error ${error}`)
  }
}
