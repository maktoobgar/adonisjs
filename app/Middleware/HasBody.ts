import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HasBody {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    if (!(request.hasBody())) {
      response.badRequest({ 'message': 'request has no body' })
      return
    }
    await next()
  }
}
