import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const basicAuth = request.headers.get('authorization')

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = Buffer.from(authValue, 'base64').toString().split(':')

    if (user === 'sbx' && pwd === '1234') {
      return NextResponse.next()
    }
  }

  const response = new NextResponse()
  response.headers.set('WWW-Authenticate', 'Basic realm="Geschützt"')
  response.status = 401
  return response
}
