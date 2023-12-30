import Title from '@/components/common/Title'
import ModuleForm from '@/components/module/ModuleForm'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-between p-10 md:p-24 gap-4'>
      <Title titleText='Crea tu cuenta' />
      <ModuleForm />
    </div>
  )
}

export default Login
