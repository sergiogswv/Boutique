'use client'

import Title from '@/components/common/Title'
import ModuleChangePassword from '@/components/module/ModuleChangePassword'

const RecoveryPage = ({ params }) => {
  return (
    <div className='flex flex-col items-center justify-between p-24 gap-4'>
      <Title titleText='Cambia tu password' />

      <ModuleChangePassword />
    </div>
  )
}

export default RecoveryPage
