import { fetchFn } from '../utils/fetchFn'
import CardHome from '../common/CardHome'

const ModuleHome = async () => {
  const items = await fetchFn({ endpoint: '/home', method: 'GET', body: null })

  return (
    <>
      <CardHome classes='md:col-span-4 lg:col-span-4' item={items[0]} />
      <CardHome classes='md:col-span-3 lg:col-span-3' item={items[1]} />
      <CardHome classes='md:col-span-5 lg:col-span-5' item={items[2]} />

      <CardHome classes='md:col-span-5 lg:col-span-7' item={items[3]} />
      <CardHome classes='md:col-span-4 lg:col-span-3' item={items[4]} />
      <CardHome classes='md:col-span-3 lg:col-span-2' item={items[5]} />
    </>
  )
}

export default ModuleHome
