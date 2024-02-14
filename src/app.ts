import Fastify from "fastify"

import { notesRoutes } from "./routes/notes"
import { authRoutes } from "./routes/auth"

const app = Fastify()

app.register(notesRoutes)
app.register(authRoutes)

try {
  await app.listen({ port: 3000 })
  console.log('🗿 HTTP server running')
} catch (err) {
  app.log.error(err)
  process.exit(1)
}
