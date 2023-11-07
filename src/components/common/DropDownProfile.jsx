import { useStore } from '@/zustand'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import React from 'react'

const DropDownProfile = () => {
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
          <p className='font-bold'>Signed in as</p>
          <p className='font-bold'>@tonyreichert</p>
        </DropdownItem>
        <DropdownItem key='settings'>
          My Settings
        </DropdownItem>
        <DropdownItem key='team_settings'>Team Settings</DropdownItem>
        <DropdownItem key='analytics'>
          Analytics
        </DropdownItem>
        <DropdownItem key='system'>System</DropdownItem>
        <DropdownItem key='configurations'>Configurations</DropdownItem>
        <DropdownItem key='help_and_feedback'>
          Help & Feedback
        </DropdownItem>
        <DropdownItem key='logout' color='danger' onClick={handleLogOut}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default DropDownProfile
