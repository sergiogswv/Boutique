import { NextResponse } from 'next/server'

export async function POST (req, res) {
  try {
    const request = await req.json()
    console.log(request)

    const response = await fetch('https://api.conekta.io/orders', {
      headers: {
        Accept: 'application/vnd.conekta-v2.1.0+json',
        'Content-type': 'application/json',
        authorization: `Bearer ${process.env.SHOP_CONEKTA_PRIVATE_KEY}`
      },
      method: 'POST',
      body: JSON.stringify(request)
    })

    console.log(await response.json())
    return NextResponse.json(response)
  } catch (error) {
    console.log(error)
  }
}
