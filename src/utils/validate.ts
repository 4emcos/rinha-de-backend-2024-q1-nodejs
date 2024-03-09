import { type Transaction } from '../interfaces/transaction'

const validateData = (transaction: Transaction, id: number): boolean => {
  if (
    !Number.isInteger(transaction.valor) ||
    !Number.isInteger(id) ||
    transaction.valor <= 0 ||
    (transaction.tipo !== 'c' && transaction.tipo !== 'd') ||
    transaction.descricao === null ||
    transaction.descricao.length > 10 ||
    transaction.descricao === ''
  ) {
    return false
  }
  return true
}

export default validateData
