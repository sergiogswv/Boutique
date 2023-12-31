import { NextResponse } from 'next/server'
import { getProduct } from '../products/controller/product'

export async function GET (req) {
  const { searchParams } = new URL(req.url)
  const idProduct = searchParams.get('id')

  try {
    const product = await getProduct({ id: idProduct })

    return NextResponse.json(product)
  } catch (error) {
    console.log(`Hubo un error ${error}`)
  }
}
