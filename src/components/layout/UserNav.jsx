'use client'

import { Button, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Cart from '../common/Cart'
import { useStore } from '@/zustand'
import DropDownProfile from '../common/DropDownProfile'
import { useRouter } from 'next/navigation'

const UserNav = () => {
  const handleToken = useStore(state => state.handleToken)
  const [localToken, setLocalToken] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // eslint-disable-next-line no-undef
    setLocalToken(localStorage.getItem('websession_botique'))
    if (localToken) {
      handleToken(localToken)
      router.push('/')
    }
  }, [localToken])

  return (
    <>
      {!localToken
        ? (
          <>
            <NavbarItem className='hidden lg:flex'>
              <Link href='/login'>Iniciar sesión</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color='primary' href='/registrarse' variant='flat'>
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
        <Link href='/carrito' aria-current='page'>
          <Cart />
        </Link>
      </NavbarItem>
    </>
  )
}

export default UserNav
