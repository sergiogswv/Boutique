import { Skeleton } from '@nextui-org/react'
import React from 'react'

const UserNavSkeleton = () => {
  return (
    <div className='space-y-3 p-4 bg-gray-100 rounded-lg w-[150px]'>
      <Skeleton className='w-4/5 rounded-lg'>
        <div className='h-3 w-3/5 rounded-lg bg-default-200' />
      </Skeleton>
    </div>
  )
}

export default UserNavSkeleton
