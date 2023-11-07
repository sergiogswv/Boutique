import Title from '@/components/common/Title'
import { Card, CardHeader, CardFooter, Image, Button } from '@nextui-org/react'

export default function Home () {
  const items = [
    { id: crypto.randomUUID(), title: 'Hombres', description: 'Nuestros nuevos JEANS para hombre', imgSrc: '/clothes/man-jeans.jpg', config: { size: 'col-span-4' } },
    { id: crypto.randomUUID(), title: 'Jeans', description: 'Checa nuestra colección de JEANS', imgSrc: '/clothes/blue-jeans.jpg', config: { size: 'col-span-5' } },
    { id: crypto.randomUUID(), title: 'Outfit', description: 'Completa tu outfit', imgSrc: '/clothes/man-outfit.jpg', config: { size: 'col-span-3' } },
    { id: crypto.randomUUID(), title: 'Mujeres', description: 'Nuestros nuevos ABRIGOS para mujer', imgSrc: '/clothes/woman-coat.jpg', config: { size: 'col-span-6' } },
    { id: crypto.randomUUID(), title: 'Mujeres', description: 'Nuestros SUETERS para mujeres', imgSrc: '/clothes/woman-sweater.jpg', config: { size: 'col-span-6' } }
  ]

  return (
    <main className='flex min-h-screen flex-col items-center p-12'>
      <Title titleText='Tienda en linea' />

      <section className='min-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mx-auto'>
        {
          items.map(({ id, title, description, imgSrc, config }) => (
            <Card isFooterBlurred className={`w-full h-[300px] ${config.size}`} key={id}>
              <CardHeader className='absolute z-10 top-1 flex-col items-start'>
                <p className='text-tiny text-black/80 uppercase font-bold bg-gray-200 px-4 rounded-t-lg'>{title}</p>
                <h4 className='text-black font-medium text-2xl bg-gray-200 px-4 rounded-b-lg'>{description}</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt='Card example background'
                className='z-0 w-full h-full scale-125 -translate-y-6 object-cover'
                src={imgSrc}
              />
              <CardFooter className='absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
                <div>
                  <p className='text-black text-tiny'>Available soon.</p>
                  <p className='text-black text-tiny'>Get notified.</p>
                </div>
                <Button className='text-tiny' color='primary' radius='full' size='sm'>
                  Ver colección
                </Button>
              </CardFooter>
            </Card>
          ))
        }
      </section>
    </main>
  )
}
