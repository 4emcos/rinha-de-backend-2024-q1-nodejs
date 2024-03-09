import { type Transaction } from '../../../interfaces/transaction'

interface TransactionRepository {
  doTransaction: (transaction: Transaction, id: number) => Promise<any>
}

export type { TransactionRepository }
