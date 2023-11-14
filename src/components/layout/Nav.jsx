import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import UserNav from './UserNav'
import { fetchFn } from '../utils/fetchFn'

const Nav = async () => {
  const items = await fetchFn({ endpoint: '/categories', method: 'GET', body: null })
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Link href='/'>
          Home
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
        <UserNav />
      </NavbarContent>
    </Navbar>

  )
}

export default Nav
