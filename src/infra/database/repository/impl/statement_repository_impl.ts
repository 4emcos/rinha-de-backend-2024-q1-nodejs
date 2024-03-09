import {
  getUserBalanceQuery,
  getUserTransactionsQuery
} from '../../../../constants/statement_constant'
import { type StatementResponse } from '../../../../interfaces/statement_response'
import PgClient from '../../pg_client'
import { type StatementRepository } from '../statement_repository'

const db = new PgClient()

class StatementRepositoryImpl implements StatementRepository {
  getStatement = async (id: number): Promise<StatementResponse> => {
    try {
      await db.connect()

      const balanceRes = await db.query(getUserBalanceQuery, [id])
      const balance = balanceRes.rows[0]

      if (balance === undefined) {
        throw new Error('User not found')
      }

      const transactionsRes = await db.query(getUserTransactionsQuery, [id])
      const transactions = transactionsRes.rows

      return {
        saldo: {
          total: balance.initial_balance,
          data_extrato: new Date(),
          limite: balance.limit_in_cents
        },
        ultimas_transacoes: transactions.map(t => {
          return {
            valor: t.value,
            tipo: t.type,
            descricao: t.description,
            realizada_em: t.do_at
          }
        })
      }
    } finally {
      await db.close()
    }
  }
}

export default StatementRepositoryImpl
