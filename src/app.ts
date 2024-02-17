import Fastify from "fastify"
import jwt from "@fastify/jwt"
import cookies from "@fastify/cookie"

import { notesRoutes } from "./routes/notes"
import { authRoutes } from "./routes/auth"

const app = Fastify()

app.register(jwt, {
  secret: process.env.SECRET_JWT_TOKEN,
})

app.register(cookies, {
  secret: process.env.SECRET_COOKIE_TOKEN,
  hook: 'onRequest',
})

app.register(notesRoutes)
app.register(authRoutes)

try {
  await app.listen({ port: 3000 })
  console.log('🗿 HTTP server running')
} catch (err) {
  app.log.error(err)
  process.exit(1)
}
