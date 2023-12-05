// import { NextResponse } from 'next/server'
// import product from '../../products/schema/product'

// export async function POST (req, res) {
//   const conekta = process.env.SHOP_CONEKTA_PRIVATE_KEY
//   try {
//     const request = await req.json()
//     const itemsToUpdate = request.line_items

//     const response = await fetch('https://api.conekta.io/orders', {
//       headers: {
//         Accept: 'application/vnd.conekta-v2.1.0+json',
//         'Content-type': 'application/json',
//         authorization: `Bearer ${conekta}`
//       },
//       method: 'POST',
//       body: JSON.stringify(request)
//     })

//     const responseConekta = await response.json()

//     if (responseConekta.payment_status === 'paid') {
//       itemsToUpdate.map(async item => {
//         await product.findByIdAndUpdate({ _id: item.id }, { selled: true })
//       })
//     }

//     return NextResponse.json(responseConekta)
//   } catch (error) {
//   }
// }
