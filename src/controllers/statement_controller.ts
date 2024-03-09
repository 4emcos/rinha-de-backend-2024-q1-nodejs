import { type FastifyReply } from 'fastify'
import { type StatementRequest } from '../interfaces/statement_request'
import type StatementService from '../service/statement_service'

class StatementController {
  constructor(private readonly statementService: StatementService) {}

  async execute(req: StatementRequest, reply: FastifyReply): Promise<void> {
    const id = parseInt(req.params.id)
    if (!Number.isInteger(id)) {
      await reply.code(422).send()
      return
    }
    try {
      const statement = await this.statementService.execute(id)
      await reply.code(200).send(statement)
    } catch (error) {
      await reply.code(404).send()
    }
  }
}

export default StatementController
