export const validateUser = ({ currentUser }) => {
  if (!currentUser || currentUser === null) {
    const responseUser = { error: { user: 'Usuario no especificado. Token inválido' } }
    return responseUser
  }

  const responseUser = JSON.parse(currentUser)
  return responseUser
}
