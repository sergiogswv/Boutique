'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import Link from 'next/link'
import UserNav from './UserNav'

import { Suspense, useEffect, useState } from 'react'
import Image from 'next/image'
import { redirect, usePathname } from 'next/navigation'
import { useStore } from '@/zustand'

const Nav = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const token = useStore(state => state.token)

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const local = localStorage.getItem('websession_botique')
    const formatLocal = JSON.parse(local)
    const prefixes = ['/miperfil', '/compras']

    if (token == null && prefixes.some(prefix => pathname.startsWith(prefix))) {
      redirect('/')
    }

    const prefixesWithProfile = ['/login']

    if ((formatLocal || token?.token) && prefixesWithProfile.some(prefix => pathname.startsWith(prefix))) {
      redirect('/')
    }
  }, [pathname])

  return (
    <Navbar shouldHideOnScroll maxWidth='full' height='6rem' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Link href='/'>
            <Image
              alt='Logo Tracks Boutique'
              src='/horizontalLogoTracks.png'
              className='w-6/12 md:mt-10'
              width={350}
              height={350}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {items?.map(({ _id, name, href }) => (
          <NavbarItem key={_id}>
            <Link href={`/${href}`}>
              {name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end' className='hidden sm:flex gap-4'>
        <Suspense>
          <UserNav menuMobile={false} />
        </Suspense>
      </NavbarContent>
      <NavbarMenu>
        {items?.map((item) => (
          <NavbarMenuItem key={item._id}>
            <Link
              className='w-full'
              href={`/${item.href}`}
              size='lg'
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <Suspense>
          <UserNav menuMobile />
        </Suspense>
      </NavbarMenu>
    </Navbar>

  )
}

export default Nav
