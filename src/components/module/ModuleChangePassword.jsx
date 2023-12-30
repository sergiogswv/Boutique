'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Alert from '../common/Alert'
import { Spinner } from '@nextui-org/react'
import { useRouter, useSearchParams } from 'next/navigation'

const ModuleChangePassword = () => {
  const router = useRouter()
  const path = useSearchParams()
  const emailToReset = path.get('email')
  const tokenConfirm = path.get('tokenConfirm')

  const [statusResponse, setStatusResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      password: '',
      confirm: ''
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required('Este es un campo obligatorio')
        .min(6, 'El password debe de tener mínimo 6 caracteres')
        .max(20, 'El password debe de tener máximo 20 caracteres').matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#$_%&.,-]){8,16}/,
          'La contraseña no contiene mayusculas, minusculas, números o caracteres especiales (#$_%&.,-)'
        ),
      confirm: Yup.string()
        .required('Este es un campo obligatorio')
        .oneOf([Yup.ref('password'), null], 'Las contraseñas deben de coincidir')
    }),
    onSubmit: async (values) => {
      setLoading(true)
      const { password, confirm } = values
      //   const url = window.location.origin
      const url = process.env.NEXT_PUBLIC_URL_API
      const data = {
        email: emailToReset,
        tokenConfirm,
        password,
        confirm
      }

      const response = await fetch(
        `${url}/api/user/restart`,
        {
          method: 'POST',
          body: JSON.stringify(data)
        }
      )

      const user = await response.json()
      setLoading(false)

      if (user.error) {
        setStatusResponse(user.error)
        return
      }
      setStatusResponse({ ok: 'Contraseña restablecida' })

      setTimeout(() => {
        router.push('/login')
      }, 1000)
    }
  })
  return (
    <form className='w-11/12 md:w-5/12 mt-5' onSubmit={formik.handleSubmit}>
      {statusResponse?.token && (
        <div className='text-white bg-red-700 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 w-full h-[80px] md:h-[50px] text-center uppercase text-sm md:text-lg'>
          <p>{statusResponse?.token}</p>
        </div>
      )}
      {statusResponse?.ok && (
        <div className='text-white bg-green-700 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 w-full h-[80px] md:h-[50px] text-center uppercase text-sm md:text-lg'>
          <p>{statusResponse?.ok}</p>
        </div>
      )}
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
      <div className='mb-6'>
        <label
          htmlFor='confirm'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Confirmar Password:
        </label>
        <input
          type='password'
          id='confirm'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirm}
        />
        {formik.errors.confirm && formik.touched.confirm && (
          <Alert error={formik.errors.confirm} />
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

export default ModuleChangePassword
