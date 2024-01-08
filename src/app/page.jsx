import ModuleFaqs from '@/components/module/ModuleFaqs'
import ModuleHome from '@/components/module/ModuleHome'
import HomeSkeleton from '@/components/module/skeletons/Home'
import { Suspense } from 'react'

export default function Home () {
  return (
    <main className='flex md:min-h-screen flex-col items-center mt-10 md:p-12'>
      <section className='w-full md:w-10/12 gap-2 grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12 md:grid-rows-2 px-2 md:px-8 mx-auto mb-8 md:mb-20'>
        <Suspense fallback={<HomeSkeleton />}>
          <ModuleHome />
        </Suspense>
      </section>

      <ModuleFaqs />
    </main>
  )
}
