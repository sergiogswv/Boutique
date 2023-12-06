import { NextResponse } from 'next/server'
import { createItem, getAllItems, updateItemMenu } from './controller/home'

export async function POST (req, res) {
  try {
    const request = await req.json()
    const homeResponse = await createItem({ request })

    return NextResponse.json(homeResponse)
  } catch (error) {
    console.log(`Hubo un error ${error}`)
  }
}

export async function GET (req, res) {
  try {
    const items = await getAllItems()
    return NextResponse.json(items)
  } catch (error) {
    console.log(`Hubo un error ${error}`)
  }
}

export async function PUT (req, res) {
  try {
    const request = await req.json()
    const item = await updateItemMenu({ request })

    return NextResponse.json(item)
  } catch (error) {
    console.log(`Hubo un error ${error}`)
  }
}
