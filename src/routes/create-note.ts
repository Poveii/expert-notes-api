import { FastifyInstance } from "fastify"

export async function createNote(app: FastifyInstance) {
  return app.get('/create', async (req, rep) => {
    return rep.send({ message: 'Creating note...' })
  })
}
