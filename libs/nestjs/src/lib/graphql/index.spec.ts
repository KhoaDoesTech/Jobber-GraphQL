import { AbstractModel } from './index'

describe('GraphQL Index Exports', () => {
  it('should export AbstractModel', () => {
    expect(AbstractModel).toBeDefined()
  })

  it('should create AbstractModel instance', () => {
    const model = new AbstractModel()
    expect(model).toBeInstanceOf(AbstractModel)
  })
})