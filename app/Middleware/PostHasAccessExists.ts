import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostHasAccessExists {
  public async handle({ auth, params, response }: HttpContextContract, next: () => Promise<void>) {
    const post = await Post.find(params.id)
    if (!post){
      response.notFound({'message': 'requested post not found'})
      return
    }
    else if (post?.userId !== auth.user?.id) {
      response.notAcceptable({ 'message': 'you don\'t have required permissions to edit/delete this post' })
      return
    }
    await next()
  }
}
