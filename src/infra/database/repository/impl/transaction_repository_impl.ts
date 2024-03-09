import {
  creditQuery,
  debitQuery
} from '../../../../constants/transaction_constants'
import { type StatusTransaction } from '../../../../interfaces/status_transaction'
import { type Transaction } from '../../../../interfaces/transaction'
import PgClient from '../../pg_client'
import { type TransactionRepository } from '../transaction_repository'

const db = new PgClient()

class TransactionRepositoryImpl implements TransactionRepository {
  doTransaction = async (
    transaction: Transaction,
    id: number
  ): Promise<StatusTransaction> => {
    try {
      await db.connect()

      const query = transaction.tipo === 'd' ? debitQuery : creditQuery

      const res = await db.query(query, [
        id,
        transaction.valor,
        transaction.descricao
      ])
      const success: boolean = res.rows[0].success
      const currentLimit: number = res.rows[0].current_limit
      const balance: number = res.rows[0].new_balance

      return {
        success,
        limite: currentLimit,
        saldo: balance
      }
    } finally {
      await db.close()
    }
  }
}

export default TransactionRepositoryImpl
