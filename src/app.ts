import Fastify from "fastify"

import { createNote } from "./routes/create-note"
import { listNotes } from "./routes/list-notes"
import { deleteNote } from "./routes/delete-note"

const app = Fastify()

app.register(createNote)
app.register(listNotes)
app.register(deleteNote)

try {
  await app.listen({ port: 3000 })
  console.log('🗿 HTTP server running')
} catch (err) {
  app.log.error(err)
  process.exit(1)
}
