import { FastifyInstance } from "fastify"

export async function deleteNote(app: FastifyInstance) {
  return app.get('/delete/:id', async (req, rep) => {
    return rep.send({ message: 'Deleting note...' })
  })
}
