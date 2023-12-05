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
      return { error: { email: 'No existe una cuenta con este email.' } }
    }

    if (userExist.tokenConfirm === '') {
      return { error: { confirm: 'Esta cuenta ya ha sido confirmada.' } }
    }

    if (userExist.tokenConfirm !== tokenConfirm) {
      return { error: { confirm: 'Código de confirmación inválido.' } }
    }

    await user.findOneAndUpdate({ email }, { tokenConfirm: '' })
    return NextResponse.redirect('http://localhost:3000')
  } catch (error) {
    console.log(error)
    return NextResponse.json({ msg: 'Hubo un error' })
  }
}
