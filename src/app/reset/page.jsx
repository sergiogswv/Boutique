import Title from '@/components/common/Title'
import ModuleChangePassword from '@/components/module/ModuleChangePassword'

const RecoveryPage = () => {
  return (
    <div className='flex flex-col items-center justify-between p-24 gap-4'>
      <Title titleText='Cambia tu password' />

      <ModuleChangePassword />
    </div>
  )
}

export default RecoveryPage
