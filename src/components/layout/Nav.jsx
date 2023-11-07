import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react'
import Link from 'next/link'
import Cart from '../common/Cart'

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
        <NavbarItem className='hidden lg:flex'>
          <Link href='/login'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Link href='cart' aria-current='page'>
            <Cart />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>

  )
}

export default Nav
