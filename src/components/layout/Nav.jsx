import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import UserNav from './UserNav'

const Nav = () => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Link href='/'>
          Home
        </Link>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem />
        <NavbarItem>
          <Link href='/man'>
            Hombres
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='/ woman' aria-current='page'>
            Mujeres
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/ kids' aria-current='page'>
            Niños
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/about'>
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <UserNav />
      </NavbarContent>
    </Navbar>

  )
}

export default Nav
