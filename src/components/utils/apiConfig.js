const url = process.env.SHOP_APP_URL_MONGODB_URL
const user = process.env.SHOP_APP_URL_MONGODB_USER
const pass = process.env.SHOP_APP_URL_MONGODB_PASSWORD
const cluster = process.env.SHOP_APP_URL_MONGODB_CLUSTER
const endString = process.env.SHOP_APP_URL_MONGODB_END
const databaseName = process.env.SHOP_APP_URL_MONGODB_DATABASE

export const urlApi = `${url}${user}:${pass}@${cluster}.${endString}/${databaseName}`
