import { Card, Skeleton } from '@nextui-org/react'
import React from 'react'

const HomeSkeleton = () => {
  return (
    <>
      <section className='w-full col-span-12 flex gap-5'>
        <Card className='col-span-4 h-[350px] w-full' radius='lg'>
          <Skeleton className='rounded-lg'>
            <div className='h-[400px] w-[400px] rounded-lg bg-default-300' />
          </Skeleton>
          <div className='space-y-3 p-4'>
            <Skeleton className='w-3/5 rounded-lg'>
              <div className='h-3 w-3/5 rounded-lg bg-default-200' />
            </Skeleton>
          </div>
        </Card>
        <Card className='col-span-4 h-[350px] w-full' radius='lg'>
          <Skeleton className='rounded-lg'>
            <div className='h-[400px] w-[400px] rounded-lg bg-default-300' />
          </Skeleton>
          <div className='space-y-3 p-4'>
            <Skeleton className='w-3/5 rounded-lg'>
              <div className='h-3 w-3/5 rounded-lg bg-default-200' />
            </Skeleton>
          </div>
        </Card>
        <Card className='col-span-4 h-[350px] w-full' radius='lg'>
          <Skeleton className='rounded-lg'>
            <div className='h-[400px] w-[400px] rounded-lg bg-default-300' />
          </Skeleton>
          <div className='space-y-3 p-4'>
            <Skeleton className='w-3/5 rounded-lg'>
              <div className='h-3 w-3/5 rounded-lg bg-default-200' />
            </Skeleton>
          </div>
        </Card>
      </section>
      <section className='w-full col-span-12 flex gap-5'>
        <Card className='col-span-4 h-[350px] w-full' radius='lg'>
          <Skeleton className='rounded-lg'>
            <div className='h-[400px] w-[400px] rounded-lg bg-default-300' />
          </Skeleton>
          <div className='space-y-3 p-4'>
            <Skeleton className='w-3/5 rounded-lg'>
              <div className='h-3 w-3/5 rounded-lg bg-default-200' />
            </Skeleton>
          </div>
        </Card>
        <Card className='col-span-4 h-[350px] w-full' radius='lg'>
          <Skeleton className='rounded-lg'>
            <div className='h-[400px] w-[400px] rounded-lg bg-default-300' />
          </Skeleton>
          <div className='space-y-3 p-4'>
            <Skeleton className='w-3/5 rounded-lg'>
              <div className='h-3 w-3/5 rounded-lg bg-default-200' />
            </Skeleton>
          </div>
        </Card>
        <Card className='col-span-4 h-[350px] w-full' radius='lg'>
          <Skeleton className='rounded-lg'>
            <div className='h-[400px] w-[400px] rounded-lg bg-default-300' />
          </Skeleton>
          <div className='space-y-3 p-4'>
            <Skeleton className='w-3/5 rounded-lg'>
              <div className='h-3 w-3/5 rounded-lg bg-default-200' />
            </Skeleton>
          </div>
        </Card>
      </section>
    </>

  )
}

export default HomeSkeleton
