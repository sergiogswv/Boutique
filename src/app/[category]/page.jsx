import { headers } from 'next/headers'

const CategoryPage = () => {
  const headersList = headers()
  console.log(headersList.get('referer'))
  const slug = headersList.get('referer').split('/')[3]
  console.log(slug)
  return (
    <div>page</div>
  )
}

export default CategoryPage
