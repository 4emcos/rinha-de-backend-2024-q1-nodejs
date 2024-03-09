import { type StatementRepository } from '../infra/database/repository/statement_repository'
import { type StatementResponse } from '../interfaces/statement_response'

class StatementService {
  constructor(private readonly statementRepository: StatementRepository) {}

  async execute(id: number): Promise<StatementResponse> {
    return await this.statementRepository.getStatement(id)
  }
}

export default StatementService
