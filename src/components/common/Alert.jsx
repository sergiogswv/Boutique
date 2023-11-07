import React from 'react'

const Alert = ({ error }) => {
  return (
    <p className='italic text-md text-red-700'>{error}</p>
  )
}

export default Alert
