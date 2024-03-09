import { type TransactionRepository } from '../infra/database/repository/transaction_repository'
import { type StatusTransaction } from '../interfaces/status_transaction'
import { type Transaction } from '../interfaces/transaction'
import validateData from '../utils/validate'

class TransactionService {
  constructor(private readonly transactionRepository: TransactionRepository) {}

  public async execute(
    transaction: Transaction,
    id: number
  ): Promise<StatusTransaction> {
    const isValid = validateData(transaction, id)
    if (!isValid) {
      return { success: false, limite: 0, saldo: 0 }
    }

    return await this.transactionRepository.doTransaction(transaction, id)
  }
}

export default TransactionService
