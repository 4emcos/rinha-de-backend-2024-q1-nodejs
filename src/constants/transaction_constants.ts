const debitQuery: string = 'SELECT * FROM rinha.debit($1, $2, $3)'

const creditQuery: string = 'SELECT * FROM rinha.credit($1, $2, $3)'

export { creditQuery, debitQuery }
