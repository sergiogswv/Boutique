'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Alert from '../common/Alert'
import { Spinner } from '@nextui-org/react'
import { useStore } from '@/zustand'

const ModuleFormLogin = () => {
  const [handleToken] = useStore(state => [state.handleToken])
  const [statusResponse, setStatusResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email inválido')
        .required('Este es un campo obligatorio'),
      password: Yup.string()
        .required('Este es un campo obligatorio')
        .min(6, 'El password debe de tener mínimo 6 caracteres')
        .max(20, 'El password debe de tener máximo 20 caracteres')
    }),
    onSubmit: async (values) => {
      setLoading(true)
      const { email, password } = values
      const url = window.location.origin
      const response = await fetch(
        `${url}/api/user?email=${email}&password=${password}`,
        {
          method: 'GET'
        }
      )
      const status = await response.json()

      if (!status.confirm && !status.email && !status.password) {
        const responseToken = { token: status }
        // eslint-disable-next-line no-undef
        localStorage.setItem('websession_botique', JSON.stringify(responseToken))
        handleToken(status)
        // router.push('/')
        window.location.reload()
      }

      setStatusResponse(status)
      setLoading(false)
      setTimeout(() => {
        setStatusResponse(null)
      }, 2000)
    }
  })
  return (
    <form className='w-full md:w-5/12 mt-5' onSubmit={formik.handleSubmit}>
      {statusResponse?.email && (
        <div className='text-white bg-red-700 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 w-full h-[80px] md:h-[50px] text-center uppercase text-sm md:text-lg'>
          <p>{statusResponse?.email}</p>
        </div>
      )}
      {statusResponse?.password !== undefined && (
        <div className='text-white bg-red-700 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 w-full h-[80px] md:h-[50px] text-center uppercase text-sm md:text-lg'>
          <p>{statusResponse?.password}</p>
        </div>
      )}
      {statusResponse?.confirm !== undefined && (
        <div className='text-white bg-red-700 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 w-full h-[80px] md:h-[50px] text-center uppercase text-sm md:text-lg'>
          <p>{statusResponse?.confirm}</p>
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
      <div className='mb-6'>
        <label
          htmlFor='password'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Password:
        </label>
        <input
          type='password'
          id='password'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password && (
          <Alert error={formik.errors.password} />
        )}
      </div>
      <div className='grid gap-4 md:flex md:gap-1 items-start justify-between mb-6'>
        <Link href='/registrarse' className='text-sm md:text-md font-medium text-blue-400'>
          Crea tu cuenta aquí
        </Link>
        <Link href='/recuperar-password' className='text-sm md:text-md font-medium text-blue-400'>
          Olvide mi contraseña
        </Link>
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

export default ModuleFormLogin
