import { fetchFn } from '@/components/utils/fetchFn'
import { Card, CardBody, CardFooter } from '@nextui-org/react'
import Link from 'next/link'

const CategoryPage = async ({ params }) => {
  const products = await fetchFn({ method: 'GET', endpoint: `/products?category=${params.category}`, body: null })
  return (
    <div className='w-full md:w-10/12 gap-5 grid grid-cols-3 md:grid-cols-12 h-auto pt-10 pb-5 px-5 mx-auto'>
      {
        products.map(product => (
          <Card shadow='lg' key={product._id} className='h-[325px] col-span-3'>
            <CardBody className='overflow-visible p-0'>
              <Link href={`${params.category}/${product._id}`}>
                <img
                  alt={product.title}
                  className='w-full object-cover h-[255px]'
                  src={`/clothes/${product.image}`}
                />
              </Link>
            </CardBody>
            <CardFooter className='text-lg bg-gradient-to-br from-blue-200 to-blue-300 h-full relative opacity-80'>
              <b>{product.name}</b>
              {!product.selled ? (<p className='text-default-500 italic absolute bottom-0 right-3'>Disponibles</p>) : <p className='text-default-500 italic absolute bottom-0 right-3'>Sin disponibilidad</p>}
            </CardFooter>
          </Card>
        ))
      }
    </div>
  )
}

export default CategoryPage
