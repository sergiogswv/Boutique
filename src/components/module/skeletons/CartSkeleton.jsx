import { Card, Skeleton } from '@nextui-org/react'
import React from 'react'

const CartSkeleton = () => {
  return (
    <Card className='w-11/12 space-y-5 p-4 grid grid-cols-3' radius='lg'>
      <Skeleton className='rounded-lg w-6/12 h-[200px]'>
        <div className='h-24 rounded-lg bg-default-300' />
      </Skeleton>
      <div className='space-y-3 col-span-2 grid'>
        <Skeleton className='w-3/5 rounded-lg'>
          <div className='h-3 w-3/5 rounded-lg bg-default-200' />
        </Skeleton>
        <Skeleton className='w-4/5 rounded-lg'>
          <div className='h-3 w-4/5 rounded-lg bg-default-200' />
        </Skeleton>
        <Skeleton className='w-2/5 rounded-lg'>
          <div className='h-3 w-2/5 rounded-lg bg-default-300' />
        </Skeleton>
      </div>
    </Card>
  )
}

export default CartSkeleton
