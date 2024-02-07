import { FastifyInstance } from "fastify"

export async function notesRoutes(app: FastifyInstance) {
  app.get('/notes', async (req, rep) => {
    return rep.send({ message: 'Listing notes...' })
  })

  app.post('/notes/create', async (req, rep) => {
    return rep.send({ message: 'Creating note...' })
  })

  app.delete('/notes/delete/:id', async (req, rep) => {
    return rep.send({ message: 'Deleting note...' })
  })
}
