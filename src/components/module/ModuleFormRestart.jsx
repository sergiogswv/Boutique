'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Alert from '../common/Alert'
import { Spinner } from '@nextui-org/react'

const ModuleFormRestart = () => {
  const [statusResponse, setStatusResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState(null)

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email inválido')
        .required('Este es un campo obligatorio')
    }),
    onSubmit: async (values) => {
      setLoading(true)
      const { email } = values
      //   const url = window.location.origin
      const url = process.env.NEXT_PUBLIC_URL_API

      const response = await fetch(
        `${url}/api/user/restart?email=${email}`,
        {
          method: 'GET'
        }
      )

      const user = await response.json()

      if (!user?.token) {
        setStatusResponse(user.error)
      }

      setLoading(false)
      setMsg('Revisa tu cuenta de correo para continuar con este proceso.')
    }
  })
  return (
    <form className='w-11/12 md:w-5/12 mt-5' onSubmit={formik.handleSubmit}>
      {statusResponse?.email && (
        <div className='text-white bg-red-700 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 w-full h-[50px] text-center uppercase text-sm md:text-lg'>
          <p>{statusResponse?.email}</p>
        </div>
      )}
      {msg !== null && (
        <div className='text-white bg-green-500 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 w-full h-[60px] md:h-[75px] text-center uppercase text-sm md:text-lg'>
          <p>{msg}</p>
        </div>
      )}
      <div className='mb-6'>
        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Email:
        </label>
        <input
          type='email'
          id='email'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='name@flowbite.com'
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <Alert error={formik.errors.email} />
        )}
      </div>
      <div className='flex gap-5'>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
        >
          {loading ? <Spinner /> : 'Siguiente'}
        </button>
      </div>
    </form>
  )
}

export default ModuleFormRestart
