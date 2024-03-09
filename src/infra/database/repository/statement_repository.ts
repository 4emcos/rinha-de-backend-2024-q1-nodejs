import { type StatementResponse } from '../../../interfaces/statement_response'

interface StatementRepository {
  getStatement: (id: number) => Promise<StatementResponse>
}

export type { StatementRepository }
