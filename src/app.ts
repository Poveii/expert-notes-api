import Fastify from "fastify"

import { notesRoutes } from "./routes/notes"

const app = Fastify()

app.register(notesRoutes)

try {
  await app.listen({ port: 3000 })
  console.log('🗿 HTTP server running')
} catch (err) {
  app.log.error(err)
  process.exit(1)
}
