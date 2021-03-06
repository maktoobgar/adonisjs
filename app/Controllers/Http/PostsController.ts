import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreatePostValidator from 'App/Validators/CreatePostValidator'
import Post from 'App/Models/Post'
import UpdatePostValidator from 'App/Validators/UpdatePostValidator'

export default class PostsController {
  public async create({ request, response, auth }: HttpContextContract) {
    await request.validate(CreatePostValidator)
    const { title, context } = request.only(['title', 'context'])
    if (auth.user) {
      const post = new Post().fill({ title, context, userId: auth.user.id })  // because this relation is not complicated, this works fine too
      // if (!Post.$getRelation('user').booted) { Post.$getRelation('user').boot() }   // relation needs to boot to use down functions and set relationships
      // Post.$getRelation('user').setRelated(post, auth.user)            // creates the relationship just on user field and not userId
      // Post.$getRelation('user').hydrateForPersistance(post, auth.user) // sets the value for userId in post.userId field and not on user
      await post.save()
      await post.load('user')   // loads user variable by userId, doesn't matter if you call this after or before post.save() function but better to call it after
      response.created(post)
    }
  }
  public async delete({ response, params }: HttpContextContract) {
    await params.post.delete()
    response.noContent()
  }
  public async show({ params, response }: HttpContextContract) {
    if (params.post) {
      response.ok(params.post)
      return
    }
  }
  public async update({ params, response, request }: HttpContextContract) {
    await request.validate(UpdatePostValidator)
    const post = params.post
    const { title, context } = request.only(['title', 'context'])
    post.title = Boolean(title) ? title : (request.method() === 'PATCH' ? post.title : "")
    post.context = Boolean(context) ? context : (request.method() === 'PATCH' ? post.context : "")
    await post.save()
    await post.load('user')
    response.accepted(post)
  }
}
