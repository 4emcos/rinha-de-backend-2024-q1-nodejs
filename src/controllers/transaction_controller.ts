import { type FastifyReply } from 'fastify'
import { type Transaction } from '../interfaces/transaction'
import { type TransactionRequest } from '../interfaces/transaction_request'
import type TransactionService from '../service/transaction_service'

class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  public async execute(
    req: TransactionRequest,
    reply: FastifyReply
  ): Promise<void> {
    const transaction: Transaction = req.body
    const id = parseInt(req.params.id)

    const result = await this.transactionService.execute(transaction, id)
    if (result.success) {
      await reply.code(200).send({
        limite: result.limite,
        saldo: result.saldo
      })
      return
    }

    if (result.saldo === null || result.limite === null) {
      await reply.code(404).send()
      return
    }
    await reply.code(422).send()
  }
}

export default TransactionController
