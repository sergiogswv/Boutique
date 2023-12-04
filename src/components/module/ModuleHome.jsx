import { Card, CardFooter, CardHeader } from '@nextui-org/react'
import { fetchFn } from '../utils/fetchFn'
import Image from 'next/image'
import Link from 'next/link'

const ModuleHome = async () => {
  const items = await fetchFn({ endpoint: '/home', method: 'GET', body: null })

  return (
    <>
      {items?.map(({ _id, title, description, img, href }) => (
        <Card isFooterBlurred className='w-full h-[300px] col-span-1 md:col-span-3 lg:col-span-4' key={_id}>
          <CardHeader className='absolute z-10 top-1 flex-col items-start'>
            <p className='text-tiny text-black/80 uppercase font-bold bg-gray-200 px-4 rounded-t-lg'>{title}</p>
            <h3 className='text-black text-sm md:text-2xl bg-gray-200 px-1 md:px-4 rounded-b-lg'>{description}</h3>
          </CardHeader>
          <Image
            alt={title}
            width={400}
            height={400}
            className='z-0 w-full h-full scale-125 -translate-y-6 object-cover'
            src={`/clothes/${img}`}
          />
          <CardFooter className='absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
            <div />
            <Link href={href} className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              Ver colección
            </Link>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}

export default ModuleHome
