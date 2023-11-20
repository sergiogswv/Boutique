import { NextResponse } from 'next/server'
import * as jose from 'jose'

export const config = {
  matcher: ['/api/:function*']
}

const prefixes = ['/api/cart', '/api/user/profile']
const secret = new TextEncoder().encode(
  process.env.SECRETTRACKSWORDS
)

export async function middleware (req) {
  const { pathname } = req.nextUrl
  if (prefixes.some(prefix => pathname.startsWith(prefix))) {
    const token = req.headers.get('Authorization').split(' ')[1]
    if (token) {
      const requestHeaders = new Headers(req.headers)

      try {
        const { payload } = await jose.jwtVerify(token, secret)

        requestHeaders.set('currentUser', JSON.stringify(payload.user))
        const response = NextResponse.next({
          request: {
            headers: requestHeaders
          }
        })
        return response
      } catch (error) {
        const payload = { user: null }
        requestHeaders.set('currentUser', JSON.stringify(payload.user))
        const response = NextResponse.next({
          request: {
            headers: requestHeaders
          }
        })
        return response
      }
    }
  }
  return NextResponse.next()
}
