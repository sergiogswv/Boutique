'use client'

import { fetchFn } from '@/components/utils/fetchFn'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
  const params = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState(null)

  useEffect(() => {
    const email = params.get('email')
    const tokenConfirm = params.get('tokenConfirm')
    const getConfirmation = async () => {
      const response = await fetchFn({
        endpoint: `/user/confirm?email=${email}&tokenConfirm=${tokenConfirm}`,
        method: 'GET',
        front: true
      })
      setStatus(response)
    }

    getConfirmation()
    setTimeout(() => {
      router.push('/')
    }, 1500)
  }, [])

  return (
    <div className='grid w-full mx-auto my-auto'>
      {status?.error?.status === 500
        ? (
          <h2 className='mx-auto text-4xl'>{status?.error?.confirm}</h2>
          )
        : (
          <>
            <h2 className='mx-auto text-4xl'>{status?.msg?.confirm}</h2>
            <p className='italic mx-auto'>...redireccionando</p>
          </>
          )}
    </div>
  )
}

export default page
