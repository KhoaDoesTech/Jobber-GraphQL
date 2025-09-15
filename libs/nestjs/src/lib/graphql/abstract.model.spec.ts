import { AbstractModel } from './abstract.model'

describe('AbstractModel', () => {
  it('should be defined', () => {
    expect(AbstractModel).toBeDefined()
  })

  it('should have id field', () => {
    const model = new AbstractModel()
    expect(model).toHaveProperty('id')
  })

  it('should allow setting id', () => {
    const model = new AbstractModel()
    model.id = 123
    expect(model.id).toBe(123)
  })
})