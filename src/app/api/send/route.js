import TemplateRegister from '@/components/email/TemplateRegister'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST (req, res) {
  // console.log('sending email')
  // console.log({ token: crypto.randomUUID() })
  try {
    const data = await resend.emails.send({
      from: 'Tracks Boutique <onboarding@resend.dev>',
      to: ['wiildo.griimm.gates@gmail.com'],
      subject: 'Bienvenido Tracks Boutique',
      react: TemplateRegister({ firstName: 'John' })
    })

    return NextResponse.json(data)
  } catch (error) {
    // res.status(400).json(error)
    return NextResponse.error(error)
  }
}
