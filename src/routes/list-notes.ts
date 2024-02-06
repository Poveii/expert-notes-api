import { FastifyInstance } from "fastify"

export async function listNotes(app: FastifyInstance) {
  return app.get('/', async (req, rep) => {
    return rep.send({ message: 'Listing notes...' })
  })
}
