export const fetchFn = async ({ endpoint, method, body }) => {
  const apiUrl = process.env.SHOP_APP_URL_API
  const response = await fetch(`${apiUrl}${endpoint}`, {
    headers: {
      'Contentt-Type': 'application/json'
    },
    body: method === 'POST' ? JSON.stringify(body) : null
  })
  const data = await response.json()
  return data
}
