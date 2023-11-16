export const fetchFn = async ({ endpoint, method, body = undefined, token = '' }) => {
  console.log({ endpoint, method, body })
  const apiUrl = process.env.SHOP_APP_URL_API
  const response = await fetch(`${apiUrl}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: method === 'POST' ? JSON.stringify(body) : undefined
  })
  const data = await response.json()
  return data
}
