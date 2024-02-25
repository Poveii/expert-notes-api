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

    // TODO: Antes de criar um usuário, verificar se ele já existe no DB.

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
    const loginAuthBody = z.object({
      username: z.string(),
      password: z.string(),
    })

    const { username, password } = loginAuthBody.parse(req.body)

    const user = await prisma.user.findUnique({
      where: {
        username: username,
        password: password,
      }
    })

    if (!user) return reply.status(400).send({
      message: "Usuário não encontrado. Verifique os dados enviados."
    })

    const { id } = user

    const token = app.jwt.sign({ id })

    return reply
      .setCookie("authToken", token, {
        path: "/",
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 15, // 15 days
      })
      .status(200)
      .send({ user })
  })
}
