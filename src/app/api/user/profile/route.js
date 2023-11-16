import { NextResponse } from 'next/server'

export async function GET (request) {
  const user = request.headers.get('user')
  try {
    const request = JSON.parse(user)

    return NextResponse.json(request)
  } catch (error) {
    console.log(`Hubo un error: ${error}`)
  }
}
