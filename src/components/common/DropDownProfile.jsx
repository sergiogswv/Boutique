'use client'

import { useStore } from '@/zustand'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { formatMail, formatName } from '../utils/formatFn'
import Link from 'next/link'

const DropDownProfile = async () => {
  const [handleToken, user] = useStore((state) => [state.handleToken, state.user])

  const handleLogOut = () => {
    handleToken(null)
    // eslint-disable-next-line no-undef
    localStorage.removeItem('websession_botique')
    // eslint-disable-next-line no-undef
    localStorage.removeItem('webboutique_cart')

    window.location.reload()
  }

  return (
    <Dropdown placement='bottom-start'>
      <DropdownTrigger>
        <button className='transition-transform'>Mi perfil</button>
      </DropdownTrigger>
      <DropdownMenu aria-label='User Actions' variant='flat'>
        <DropdownItem key='profile' className='h-14 gap-2'>
          <p className='font-bold'>{formatName(user?.name)}</p>
          <p className='font-bold italic'>{formatMail(user?.email)}</p>
        </DropdownItem>
        <DropdownItem key='shop'>
          <Link href='/compras'>
            Mis Compras
          </Link>
        </DropdownItem>
        <DropdownItem key='info'>
          <Link href='/miperfil'>
            Mi Información
          </Link>
        </DropdownItem>
        <DropdownItem key='logout' color='danger' onClick={handleLogOut}>
          Cerrar Sesión
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default DropDownProfile
