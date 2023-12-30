import React from 'react'

const TemplateRestart = ({ email, tokenConfirm }) => {
  const url = process.env.SHOP_APP_URL_API
  return (
    <main style={{ width: '100vw', display: 'grid', placeItems: 'center' }}>
      <section>
        <img
          alt='Logo Tracks boutique'
          src='/tracksLogo.webp'
          style={{ width: '400px', height: 'auto' }}
        />
      </section>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '32px' }}>
        ¡Restablece tu contraseña de Tracks Boutique!
      </h1>
      <article style={{ display: 'grid', gap: '20px' }}>
        <p>Favor de confirmar tu cuenta de correo electronico en el siguiente enlace:</p>
        <a style={{ width: '300px', height: '40px', backgroundColor: 'rgb(34 197 94)', borderRadius: '12px', textTransform: 'uppercase', color: '#fff', fontSize: '20px', marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto', textAlign: 'center', display: 'grid', placeItems: 'center' }} href={`${url}/reset?email=${email}&tokenConfirm=${tokenConfirm}`}>
          Confirmar cuenta
        </a>

      </article>
    </main>
  )
}

export default TemplateRestart
