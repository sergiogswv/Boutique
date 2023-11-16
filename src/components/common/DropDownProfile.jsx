'use client'

import { useStore } from '@/zustand'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import React from 'react'

const DropDownProfile = async () => {
  const handleToken = useStore(state => state.handleToken)

  const handleLogOut = () => {
    handleToken(null)
    // eslint-disable-next-line no-undef
    localStorage.removeItem('websession_botique')
  }

  return (
    <Dropdown placement='bottom-start'>
      <DropdownTrigger>
        <button className='transition-transform'>Mi perfil</button>
      </DropdownTrigger>
      <DropdownMenu aria-label='User Actions' variant='flat'>
        <DropdownItem key='profile' className='h-14 gap-2'>
          <p className='font-bold'>@tonyreichert</p>
        </DropdownItem>
        <DropdownItem key='shop'>
          Mis Compras
        </DropdownItem>
        <DropdownItem key='info'>
          Mi Información
        </DropdownItem>
        <DropdownItem key='logout' color='danger' onClick={handleLogOut}>
          Cerrar Sesión
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default DropDownProfile
