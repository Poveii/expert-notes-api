import { FastifyInstance } from "fastify"
import { z } from 'zod'

import { prisma } from "../lib/prisma"

export async function authRoutes(app: FastifyInstance) {
  app.post("/auth/register", async (req, reply) => {
    const registerAuthBody = z.object({
      name: z.string(),
      username: z.string(),
      password: z.string(),
    })

    const { name, username, password } = registerAuthBody.parse(req.body)

    if (!name) 
      return reply.status(400).send({ message: "Você não enviou o seu nome." })
    if (!username) 
      return reply.status(400).send({ message: "Você não enviou o nome de usuário." })
    if (!password) 
      return reply.status(400).send({ message: "Você não enviou a senha." })

    await prisma.user.create({
      data: {
        name,
        username,
        password
      }
    })

    return reply.status(201).send()
  })

  app.post("/auth/login", async (req, reply) => {
    // TODO
  })
}
