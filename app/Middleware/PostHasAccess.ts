import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostHasAccessExists {
  public async handle({ auth, params, response }: HttpContextContract, next: () => Promise<void>) {
    if (params.post.userId !== auth.user?.id) {
      response.notAcceptable({ 'message': 'you don\'t have required permissions to edit/delete this post' })
      return
    }
    await next()
  }
}
