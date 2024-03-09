import { Pool, type PoolClient, type QueryResult } from 'pg'

class PgClient {
  private readonly pool: Pool
  private client: PoolClient | null = null

  constructor() {
    this.pool = new Pool({
      user: 'admin',
      password: 'oot123',
      host: process.env.DB_HOST || 'localhost',
      database: 'rinha',
      port: 5432,
      max: 2,
      connectionTimeoutMillis: 3 * 60 * 1000,
      keepAlive: true
    })
  }

  async connect(): Promise<void> {
    this.client = await this.pool.connect()
  }

  async query(query: string, values: any[]): Promise<QueryResult> {
    if (!this.client) {
      throw new Error('Client is not connected')
    }
    return await this.client.query(query, values)
  }

  async close(): Promise<void> {
    if (this.client) {
      this.client.release()
      this.client = null
    }
  }
}

export default PgClient
