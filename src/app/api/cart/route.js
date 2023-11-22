import { NextResponse } from 'next/server'
// import { deleteItem, createCart, getCartProducts } from './controller/cart'
// import { validateUser } from '@/components/utils/validateUser'

// export async function GET (request) {
//   const currentUser = request.headers.get('currentUser')
//   const user = validateUser({ currentUser })
//   try {
//     const products = await getCartProducts({ userId: user.id })
//     return NextResponse.json(products)
//   } catch (error) {
//     console.log(error)
//     return { error: `Hubo un error: ${error}` }
//   }
// }

// export async function POST (request) {
//   const currentUser = request.headers.get('currentUser')
//   const user = validateUser({ currentUser })
//   try {
//     const req = await request.json()
//     const response = await createCart({ request: req, userId: user.id })

//     return NextResponse.json(response)
//   } catch (error) {
//     console.log(error)
//     return { error: `Hubo un error: ${error}` }
//   }
// }

// export async function DELETE (req) {
//   const currentUser = req.headers.get('currentUser')
//   const user = validateUser({ currentUser })
//   const { searchParams } = new URL(req.url)
//   const idProduct = searchParams.get('idProduct')

//   try {
//     const response = await deleteItem({ idProduct, userId: user.id })

//     return NextResponse.json(response)
//   } catch (error) {
//     console.log(error)
//     return { error: `Hubo un error: ${error}` }
//   }
// }

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
