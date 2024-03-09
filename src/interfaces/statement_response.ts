import { type Balance } from './balance'
import { type LastTransactions } from './last_transactions'

interface StatementResponse {
  saldo: Balance
  ultimas_transacoes: LastTransactions[]
}

export type { StatementResponse }
