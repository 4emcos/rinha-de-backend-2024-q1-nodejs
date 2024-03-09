export default interface Connection {
  connect: () => Promise<{
    connection: {
      query: (statement: string, params?: any) => Promise<any>
    }
    close: () => void
  }>
}
