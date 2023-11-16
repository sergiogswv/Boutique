'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Alert from '../common/Alert'
import { useRouter } from 'next/navigation'
import { Spinner } from '@nextui-org/react'
import { fetchFn } from '../utils/fetchFn'

const ModuleForm = () => {
  const router = useRouter()
  const [statusResponse, setStatusResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email inválido')
        .required('Este es un campo obligatorio'),
      password: Yup.string()
        .required('Este es un campo obligatorio')
        .min(6, 'El password debe de tener mínimo 6 caracteres')
        .max(20, 'El password debe de tener máximo 20 caracteres')
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#$_%&.,-]){8,16}/,
          'La contraseña no contiene mayusculas, minusculas, números o caracteres especiales (#$_%&.,-)'
        ),
      name: Yup.string()
        .required('Este es un campo obligatorio')
        .min(3, 'El password debe de tener mínimo 3 caracteres')
    }),
    onSubmit: async (values) => {
      setLoading(true)
      const response = await fetchFn({ endpoint: '/user', method: 'POST', body: values })
      const status = await response.json()
      setLoading(false)

      if (status.status === 200) {
        router.push('/login')
      }

      setStatusResponse(status.error)

      setTimeout(() => {
        setStatusResponse(null)
      }, 1500)
    }
  })
  return (
    <form className='w-5/12 mt-5' onSubmit={formik.handleSubmit}>
      {statusResponse?.email && (
        <div className='text-white bg-red-700 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 w-full h-[50px] text-center uppercase text-lg'>
          <p>{statusResponse?.email}</p>
        </div>
      )}
      {statusResponse?.password && (
        <div className='text-white bg-red-700 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 w-full h-[50px] text-center uppercase text-lg'>
          <p>{statusResponse?.password}</p>
        </div>
      )}
      <div className='mb-6'>
        <label
          htmlFor='name'
          className='block mb-2 text-sm font-medium text-gray-900'
        >
          Nombre:
        </label>
        <input
          type='text'
          id='name'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
          placeholder='Sergio'
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name && (
          <Alert error={formik.errors.name} />
        )}
      </div>
      <div className='mb-6'>
        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-gray-900'
        >
          Email:
        </label>
        <input
          type='email'
          id='email'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
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
          className='block mb-2 text-sm font-medium text-gray-900'
        >
          Password:
        </label>
        <input
          type='password'
          id='password'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password && (
          <Alert error={formik.errors.password} />
        )}
      </div>
      <div className='flex gap-5'>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
        >
          Crear Cuenta
        </button>
        {loading && <Spinner />}
      </div>
    </form>
  )
}

export default ModuleForm
