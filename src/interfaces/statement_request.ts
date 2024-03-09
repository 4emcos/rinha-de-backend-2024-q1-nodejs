import { type FastifyRequest } from 'fastify'

interface StatementRequest extends FastifyRequest {
  params: {
    id: string
  }
}

export type { StatementRequest }
