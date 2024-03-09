import { type FastifyInstance } from 'fastify'

import statementFactory from '../../factories/statement_factory'
import transactionFactory from '../../factories/transaction_factory'
import { type StatementRequest } from '../../interfaces/statement_request'
import { type TransactionRequest } from '../../interfaces/transaction_request'

async function router(fastify: FastifyInstance): Promise<void> {
  fastify.route({
    method: 'GET',
    url: '/clientes/:id/extrato',
    handler: async (req: StatementRequest, reply) => {
      await statementFactory().execute(req, reply)
    }
  })

  fastify.route({
    method: 'POST',
    url: '/clientes/:id/transacoes',
    handler: async (req: TransactionRequest, reply) => {
      await transactionFactory().execute(req, reply)
    }
  })
}

export default router
