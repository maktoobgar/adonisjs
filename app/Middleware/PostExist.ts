import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostExist {
  public async handle({ params, response }: HttpContextContract, next: () => Promise<void>) {
    const post = await Post.find(params.id)
    if (!post) {
      response.notFound({ 'message': 'requested post not found' })
      return
    }
    await post.load('user')
    params['post'] = post
    await next()
  }
}
