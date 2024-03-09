const getUserBalanceQuery: string =
  'SELECT u.initial_balance, u.limit_in_cents FROM rinha.users u WHERE u.id = $1'
const getUserTransactionsQuery: string =
  'SELECT h.value, h.type, h.description, h.do_at FROM rinha.history h WHERE h.user_id = $1 ORDER BY id DESC LIMIT 10'

export { getUserBalanceQuery, getUserTransactionsQuery }
