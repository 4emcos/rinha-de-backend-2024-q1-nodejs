import TransactionController from '../controllers/transaction_controller'
import TransactionRepositoryImpl from '../infra/database/repository/impl/transaction_repository_impl'
import TransactionService from '../service/transaction_service'

export const transactionFactory = (): TransactionController => {
  const transactionRepository = new TransactionRepositoryImpl()
  const transactionService = new TransactionService(transactionRepository)
  const transactionController = new TransactionController(transactionService)

  return transactionController
}

export default transactionFactory
