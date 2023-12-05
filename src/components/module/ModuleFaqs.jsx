'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import React from 'react'

const ModuleFaqs = () => {
  const questions = [
    { id: 1, question: '¿Cuando se entregan los artículos?', answer: 'R: De lunes a miércoles, en un horario de 8:00 a 16:00 hrs. Solicitamos que confirmen su cuenta y llenen los datos completos para mejor referencia.' },
    { id: 2, question: 'Si compro el día Miércoles, ¿Me llegará el mismo día?', answer: 'R: Unicamente en compras procesadas antes de las 12:00 hrs. En dado caso que fuese en un horario posterior, la entrega se realizará hasta el día lunes o posteriores.' },
    { id: 3, question: '¿Que métodos de pago son los permitidos?', answer: 'R: Unicamente pagos con tarjetas, por el momento no contamos con pagos en transferencias, pagos en tiendas de conveniencia o pagos contra entrega.' }
  ]

  return (
    <article className='w-full border-[1px] shadow-xl border-slate-200 rounded-xl p-5'>
      <h2 className='text-2xl md:text-4xl mb-5 font-bold'>Preguntas Frecuentes</h2>
      <Accordion variant='splitted'>
        {questions.map(({ id, question, answer }) => (
          <AccordionItem
            key={id}
            aria-label={`Accordion ${id}`}
            title=''
            subtitle={
              <p className='text-slate-500 font-bold ml-1 text-lg md:text-2xl mb-2'>
                {question}
              </p>
          }
            className='text-lg italic'
          >
            {answer}
          </AccordionItem>
        ))}
      </Accordion>
    </article>
  )
}

export default ModuleFaqs
