import { Test, TestingModule } from '@nestjs/testing'
import { UsersResolver } from './users.resolver'
import { UsersService } from './users.service'

describe('UsersResolver', () => {
  let resolver: UsersResolver
  let usersService: UsersService

  const mockUsersService = {
    createUser: jest.fn(),
    findAllUsers: jest.fn(),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile()

    resolver = module.get<UsersResolver>(UsersResolver)
    usersService = module.get<UsersService>(UsersService)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('should have usersService injected', () => {
    expect(usersService).toBeDefined()
  })
})
