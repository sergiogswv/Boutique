import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import UserNav from './UserNav'
import { fetchFn } from '../utils/fetchFn'
import { Suspense } from 'react'
import Image from 'next/image'

const Nav = async () => {
  const items = await fetchFn({ endpoint: '/categories', method: 'GET' })
  return (
    <Navbar shouldHideOnScroll maxWidth='full' height='6rem'>
      <NavbarBrand>
        <Link href='/'>
          <Image
            alt='Logo Tracks Boutique'
            src='/logoTracks.webp'
            className='mt-10'
            width={200}
            height={200}
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {items?.map(({ _id, name, href }) => (
          <NavbarItem key={_id}>
            <Link href={`/${href}`}>
              {name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>
        <Suspense>
          <UserNav />
        </Suspense>
      </NavbarContent>
    </Navbar>

  )
}

export default Nav
