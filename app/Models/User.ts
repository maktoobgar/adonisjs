import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Post from 'App/Models/Post'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public username: String

  @column()
  public email: String

  @column()
  public password: String

  @hasMany(() => Post)
  public posts: HasMany<typeof Post>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
