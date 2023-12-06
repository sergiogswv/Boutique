'use client'

import React, { useEffect, useState } from 'react'
import { fetchFn } from '../utils/fetchFn'
import { Button, Spinner } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const ModuleEdit = () => {
  const router = useRouter()
  const [userData, setUserData] = useState({})
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState(null)
  const [status, setStatus] = useState(null)

  useEffect(() => {
    const getData = async () => {
      // eslint-disable-next-line no-undef
      const t = localStorage.getItem('websession_botique')
      let local = ''
      local = JSON.parse(t)
      setToken(local.token)
      const data = await fetchFn({
        endpoint: '/user/profile',
        method: 'GET',
        token: local.token,
        front: true
      })
      setUserData({
        name: data.userExist.name,
        lastname: data.aditional.lastname,
        address: data.aditional.address,
        zipcode: data.aditional.zipcode,
        phone: data.aditional.phone,
        references: data.aditional.references ?? ''
      })

      setTimeout(() => {
        setLoading(false)
      }, 1500)
    }

    getData()
  }, [])

  const { name, lastname, address, zipcode, phone, references } = userData

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const responseApi = await fetchFn({
      endpoint: '/user/profile',
      method: 'PUT',
      body: userData,
      front: true,
      token
    })

    setStatus(responseApi)

    if (responseApi.status === 200) {
      setTimeout(() => {
        router.push('/miperfil')
      }, 1500)
    }
  }

  return loading
    ? (
      <div className='h-screen w-full grid mx-auto place-items-center'>
        <Spinner />
      </div>
      )
    : (
      <>
        {status?.status && (
          <div
            className={`${
            status.status === 200 ? 'bg-green-600' : 'bg-red-600'
          } text-white uppercase text-center h-5 md:h-7 w-11/12 md:w-6/12 mx-auto mb-4 rounded-xl place-items-center text-sm md:text-xl`}
          >
            <p>{status.msg}</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className='grid w-6/12 mx-auto'>
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
              name='name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
              required
              onChange={(e) => handleChange(e)}
              value={name}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='lastname'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Apellido:
            </label>
            <input
              type='text'
              id='lastname'
              name='lastname'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
              placeholder='Sergio'
              required
              onChange={(e) => handleChange(e)}
              value={lastname}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='address'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Dirección:
            </label>
            <input
              type='text'
              id='address'
              name='address'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
              placeholder='Avenida Sin Nombre #41'
              required
              onChange={(e) => handleChange(e)}
              value={address}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='zipcode'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Código Postal:
            </label>
            <input
              type='text'
              id='zipcode'
              name='zipcode'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
              placeholder='00000'
              required
              onChange={(e) => handleChange(e)}
              value={zipcode}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='phone'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Teléfono:
            </label>
            <input
              type='text'
              id='phone'
              name='phone'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
              placeholder='XXXXXXXXXX'
              required
              onChange={(e) => handleChange(e)}
              value={phone}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='references'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Nombre:
            </label>
            <input
              type='text'
              id='references'
              name='references'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
              placeholder='Entre Calle 1 y Calle 2'
              required
              onChange={(e) => handleChange(e)}
              value={references}
            />
          </div>

          <Button
            color='primary'
            variant='shadow'
            className='uppercase'
            type='submit'
          >
            Actualizar Información
          </Button>
        </form>
      </>
      )
}

export default ModuleEdit
