import { AbstractModel } from '@jobber-graphql/nestjs'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class User extends AbstractModel {
  @Field()
  email: string

  @Field()
  name: string
}
