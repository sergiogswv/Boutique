import ModuleHome from '@/components/module/ModuleHome'
import HomeSkeleton from '@/components/module/skeletons/Home'
import { Suspense } from 'react'

export default function Home () {
  return (
    <main className='flex min-h-screen flex-col items-center p-12'>
      <section className='w-10/12 gap-2 grid grid-cols-12 grid-rows-2 px-8 mx-auto'>
        <Suspense fallback={<HomeSkeleton />}>
          <ModuleHome />
        </Suspense>
      </section>
    </main>
  )
}
