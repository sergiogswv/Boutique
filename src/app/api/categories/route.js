import { createCategory, getCategories } from './controller/category'

const { NextResponse } = require('next/server')

export async function POST (req, res) {
  try {
    const request = await req.json()
    const categoryResponse = await createCategory({ request })

    return NextResponse.json(categoryResponse)
  } catch (error) {
    console.log(`Hubo un error ${error}`)
  }
}

export async function GET (req, res) {
  try {
    const categories = await getCategories()

    return NextResponse.json(categories)
  } catch (error) {
    console.log(`Hubo un error ${error}`)
  }
}
