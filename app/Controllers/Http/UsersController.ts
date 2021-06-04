import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from 'App/Validators/LoginValidator'

export default class UsersController {
  public async login({ request, response }: HttpContextContract) {
    await request.validate(LoginValidator)
    response.ok({ 'message': 'received' })
  }
  public async signup({ response }: HttpContextContract) {
    response.ok({ 'message': 'received' })
  }
}
