export const fetchFn = async ({ endpoint, method, body }) => {
  console.log({ endpoint, method, body })
  const apiUrl = process.env.SHOP_APP_URL_API
  const response = await fetch(`${apiUrl}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: method === 'POST' ? JSON.stringify(body) : undefined
  })
  const data = await response.json()
  return data
}
