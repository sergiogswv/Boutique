import { fetchFn } from '@/components/utils/fetchFn'
import { Card, CardBody, CardFooter } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

const CategoryPage = async ({ params }) => {
  const products = await fetchFn({ method: 'GET', endpoint: `/products?category=${params.category}`, body: null })
  return (
    <div className='w-10/12 gap-5 grid grid-cols-12 h-auto py-10 px-5 mx-auto'>
      {
        products.map(product => (
          <Card shadow='lg' key={product._id} className='h-[300px] col-span-3'>
            <CardBody className='overflow-visible p-0'>
              <Link href={`${params.category}/${product._id}`}>
                <Image
                  width={400}
                  height={700}
                  alt={product.title}
                  className='w-full object-cover h-[255px]'
                  src={`/clothes/${product.image}`}
                />
              </Link>
            </CardBody>
            <CardFooter className='text-lg justify-between bg-blue-200'>
              <b>{product.name}</b>
              {product.quantity > 0 ? (<p className='text-default-500'>Disponibles: {product.quantity}</p>) : <p className='text-default-500'>Sin disponibilidad</p>}
            </CardFooter>
          </Card>
        ))
      }
    </div>
  )
}

export default CategoryPage
