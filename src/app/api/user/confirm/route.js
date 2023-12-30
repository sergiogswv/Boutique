import { NextResponse } from 'next/server'
import user from '../schema/user'
import mongoose from 'mongoose'
import { urlApi } from '@/components/utils/apiConfig'

export async function GET (request) {
  try {
    await mongoose.connect(urlApi)
    const { searchParams } = new URL(request.url)
    const tokenConfirm = searchParams.get('tokenConfirm')
    const email = searchParams.get('email')

    const userExist = await user.findOne({ email })
    if (!userExist) {
      return NextResponse.json({ error: { email: 'No existe una cuenta con este email.', status: 500 } })
    }

    if (userExist.tokenConfirm === '') {
      return NextResponse.json({ error: { confirm: 'Esta cuenta ya ha sido confirmada.', status: 500 } })
    }

    if (userExist.tokenConfirm !== tokenConfirm) {
      return NextResponse.json({ error: { confirm: 'Código de confirmación inválido.', status: 500 } })
    }

    await user.findOneAndUpdate({ email }, { tokenConfirm: '' })
    const msg = { confirm: 'Cuenta confirmada', status: 200 }
    return NextResponse.json({ msg })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ msg: 'Hubo un error' })
  }
}
