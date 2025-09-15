import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma-clients/auth-service'
import { hash } from 'bcryptjs'

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput) {
    console.log('Input data:', data)
    
    const hashedPassword = await hash(data.password, 10)
    const userData = {
      ...data,
      password: hashedPassword,
    }
    
    console.log('Data being sent to Prisma:', userData)
    
    const result = await this.prismaService.user.create({
      data: userData,
    })
    
    console.log('Result from database:', result)
    return result
  }

  async findAllUsers() {
    return this.prismaService.user.findMany()
  }
}
