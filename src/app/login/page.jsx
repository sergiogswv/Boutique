import Title from '@/components/common/Title'
import ModuleFormLogin from '@/components/module/ModuleFormLogin'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-between p-10 md:p-24 gap-4'>
      <Title titleText='Iniciar Sesión' />

      <ModuleFormLogin />
    </div>
  )
}

export default Login
