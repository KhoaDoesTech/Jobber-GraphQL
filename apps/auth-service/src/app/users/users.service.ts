import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma-clients/auth-service'

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput) {
    return this.prismaService.user.create({ data })
  }

  async findAllUsers() {
    return this.prismaService.user.findMany()
  }
}
