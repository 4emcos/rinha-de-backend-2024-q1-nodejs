import { type FastifyRequest } from 'fastify'
import { type Transaction } from './transaction'

interface TransactionRequest extends FastifyRequest {
  body: Transaction
  params: {
    id: string
  }
}

export type { TransactionRequest }
