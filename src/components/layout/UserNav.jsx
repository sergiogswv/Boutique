'use client'

import { Button, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Cart from '../common/Cart'
import { useStore } from '@/zustand'
import DropDownProfile from '../common/DropDownProfile'

const UserNav = () => {
  const handleToken = useStore(state => state.handleToken)
  const token = useStore(state => state.token)

  useEffect(() => {
    // eslint-disable-next-line no-undef
    handleToken(localStorage.getItem('websession_botique'))
  }, [])

  return !token
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
      <>
        <NavbarItem className='hidden lg:flex'>
          <DropDownProfile />
        </NavbarItem>
        <NavbarItem>
          <Link href='/compras'>Mis compras</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='cart' aria-current='page'>
            <Cart />
          </Link>
        </NavbarItem>
      </>
      )
}

export default UserNav
