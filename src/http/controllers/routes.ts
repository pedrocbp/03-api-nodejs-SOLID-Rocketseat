import { FastifyInstance } from 'fastify'
import { register } from './register.controller'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
}
