import Title from '@/components/common/Title'
import ModuleFormRestart from '@/components/module/ModuleFormRestart'

const RecoveryPage = () => {
  return (
    <div className='flex flex-col items-center justify-between p-10 md:p-24 gap-4'>
      <Title titleText='Recuperar password' />

      <ModuleFormRestart />
    </div>
  )
}

export default RecoveryPage
