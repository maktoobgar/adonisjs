import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SignupValidator from 'App/Validators/SignupValidator'
import User from 'App/Models/User'
import LoginValidator from 'App/Validators/LoginValidator'

export default class UsersController {
  public async login({ request, response, auth }: HttpContextContract) {
    await request.validate(LoginValidator)
    const { username, email, password } = request.only(['username', 'email', 'password'])
    var uid = ""
    if (username) { uid = username } else { uid = email }
    try {
      const token = await auth.use('api').attempt(uid, password, {
        expiresIn: '30days'
      })
      response.status(200).json(token)
    }
    catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async signup({ request, response }: HttpContextContract) {
    await request.validate(SignupValidator)
    const { username, email, password } = request.only(['username', 'email', 'password'])
    const user = await User.create({ username, email, password })
    response.status(200).json(user)
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('api').revoke()
    response.status(200).json({
      revoked: true
    })
  }
}
