export const formatName = (name = '') => {
  const n = name.slice(0, 1).toUpperCase()
  const r = name.slice(1, name.length)
  return n.concat(r)
}

export const formatMail = (mail = '') => {
  const at = mail.indexOf('@')
  const e = mail.slice(0, at + 1)
  return e.concat('...')
}
