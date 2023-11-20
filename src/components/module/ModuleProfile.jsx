'use client'

import { fetchFn } from '@/components/utils/fetchFn'
import { Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ModuleProfile = () => {
  const [userData, setUserData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      // eslint-disable-next-line no-undef
      const token = localStorage.getItem('websession_botique')
      const data = await fetchFn({ endpoint: '/user/profile', method: 'GET', token, front: true })
      setUserData(data)
      setLoading(false)
    }

    getData()
  }, [])
  return (
    <div className='w-8/12 grid mx-auto'>
      <h3 className='text-5xl font-bold my-5'>Información</h3>

      <div className='grid place-content-end mr-10'>
        <Link href='/miperfil/editar' className='bg-blue-300 w-[100px] rounded-xl font-bold text-white uppercase text-center py-2 cursor-pointer hover:bg-blue-500 transition-all'>
          Editar
        </Link>
      </div>

      <Table classNames={{ table: 'bg-gray-300 rounded-lg' }}>
        <TableHeader>
          <TableColumn>Email</TableColumn>
          <TableColumn>Nombre</TableColumn>
          <TableColumn>Apellido</TableColumn>
        </TableHeader>
        <TableBody
          isLoading={loading}
          loadingContent={<Spinner />}
        >
          <TableRow key='1'>
            <TableCell>{userData?.userExist?.email}</TableCell>
            <TableCell>{userData?.userExist?.name}</TableCell>
            <TableCell>{userData?.aditional?.lastname}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table classNames={{ table: 'bg-gray-300 rounded-lg' }}>
        <TableHeader>
          <TableColumn>Dirección</TableColumn>
          <TableColumn>Código Postal</TableColumn>
          <TableColumn>Teléfono</TableColumn>
          {/* <TableColumn>Referencias</TableColumn> */}
        </TableHeader>
        <TableBody>
          <TableRow key='1'>
            <TableCell>{userData?.aditional?.address}</TableCell>
            <TableCell>{userData?.aditional?.zipcode}</TableCell>
            <TableCell>{userData?.aditional?.phone}</TableCell>
          </TableRow>
          {/* <TableRow key='2'>
            <TableCell>{userData?.aditional?.references}</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>

      <Table classNames={{ table: 'bg-gray-300 rounded-lg' }}>
        <TableHeader>
          <TableColumn>Referencias</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key='1'>
            <TableCell>{userData?.aditional?.references}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

    </div>
  )
}

export default ModuleProfile
