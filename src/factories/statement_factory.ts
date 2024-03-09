import StatementController from '../controllers/statement_controller'
import StatementRepositoryImpl from '../infra/database/repository/impl/statement_repository_impl'
import StatementService from '../service/statement_service'

export const statementFactory = (): StatementController => {
  const statementRepository = new StatementRepositoryImpl()
  const statementService = new StatementService(statementRepository)
  const statementController = new StatementController(statementService)

  return statementController
}

export default statementFactory
