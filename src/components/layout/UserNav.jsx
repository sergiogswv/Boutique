'use client'

import { Button, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Cart from '../common/Cart'
import { useStore } from '@/zustand'
import DropDownProfile from '../common/DropDownProfile'
// import { useRouter } from 'next/navigation'
import UserNavSkeleton from '../module/skeletons/UserNavSkeleton'
import { fetchFn } from '../utils/fetchFn'

const UserNav = ({ menuMobile }) => {
  const handleToken = useStore((state) => state.handleToken)
  const handleUser = useStore((state) => state.handleUser)
  const setItemsStorage = useStore((state) => state.setItemsStorage)
  const [localToken, setLocalToken] = useState(null)
  const [loading, setLoading] = useState(true)
  // const router = useRouter()

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const t = localStorage.getItem('websession_botique')
    setLocalToken(t)
    handleToken(t)
    setLoading(false)
  }, [localToken])

  useEffect(() => {
    const getData = async () => {
      // eslint-disable-next-line no-undef
      const token = localStorage.getItem('websession_botique')
      const data = await fetchFn({ endpoint: '/user/profile', method: 'GET', token, front: true })
      handleUser(data.userExist)
      // eslint-disable-next-line no-undef
      const items = localStorage.getItem('webboutique_cart')
      setItemsStorage(JSON.parse(items))
    }

    getData()
  }, [])

  return (
    <>
      {loading
        ? (
          <UserNavSkeleton />
          )
        : !localToken
            ? (
              <>
                <Link href='/carrito' aria-current='page' className='flex md:hidden place-items-center gap-4'>
                  <Cart />
                  Mi Carrito
                </Link>
                <NavbarItem className='flex'>
                  <Link href='/login'>Iniciar sesión</Link>
                </NavbarItem>
                <NavbarItem>
                  <Button
                    as={Link}
                    color='primary'
                    href='/registrarse'
                    variant='flat'
                  >
                    Crear cuenta
                  </Button>
                </NavbarItem>
              </>
              )
            : (
              <NavbarItem className='hidden lg:flex'>
                <DropDownProfile />
              </NavbarItem>
              )}
      <NavbarItem>
        <Link href='/carrito' aria-current='page' className='hidden md:flex'>
          <Cart />
        </Link>
      </NavbarItem>
    </>
  )
}

export default UserNav
