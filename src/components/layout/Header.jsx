import Nav from './Nav'
import { fetchFn } from '../utils/fetchFn'

const Header = async () => {
  const items = await fetchFn({ endpoint: '/categories', method: 'GET' })
  return (
    <header className='w-11/12 grid mx-auto'>
      <Nav items={items} />
    </header>
  )
}

export default Header
