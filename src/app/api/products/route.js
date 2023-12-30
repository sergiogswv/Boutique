import { NextResponse } from 'next/server'
import { createProduct, getProducts, updateStatus } from './controller/product'

export async function POST (req, res) {
  try {
    const request = await req.json()
    const productResponse = await createProduct({ request })

    return NextResponse.json(productResponse)
  } catch (error) {
    console.log(`Hubo un error ${error}`)
  }
}

export async function GET (request) {
  try {
    const productList = await getProducts(request)

    return NextResponse.json(productList)
  } catch (error) {
    console.log(`Hubo un error ${error}`)
  }
}

export async function PATCH (request) {
  try {
    const productChangeStatus = await updateStatus(request)

    return NextResponse.json(productChangeStatus)
  } catch (error) {
    console.log(`Hubo un error ${error}`)
  }
}
