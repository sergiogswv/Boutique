'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import Link from 'next/link'
import UserNav from './UserNav'

import { Suspense, useState } from 'react'
import Image from 'next/image'

const Nav = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
              src='/logoTracks.webp'
              className='w-6/12 md:mt-10'
              width={200}
              height={200}
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
        {items.map((item) => (
          <NavbarMenuItem key={item._id}>
            <Link
              className='w-full'
              href={item.href}
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
