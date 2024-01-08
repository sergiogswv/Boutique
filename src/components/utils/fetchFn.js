export const fetchFn = async ({ endpoint, method, body = undefined, token = '', front = false }) => {
  if (front) {
    const apiUrl = process.env.NEXT_PUBLIC_URL_API
    const url = `${apiUrl}/api${endpoint}`
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      method,
      body: method !== 'GET' ? JSON.stringify(body) : undefined
    })
    const data = await response.json()
    return data
  }

  const apiUrl = process.env.SHOP_APP_URL_API
  const url = `${apiUrl}/api${endpoint}`
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    method,
    body: method !== 'GET' ? JSON.stringify(body) : undefined,
    cache: 'no-store'
  })
  const data = await response.json()
  return data
}
