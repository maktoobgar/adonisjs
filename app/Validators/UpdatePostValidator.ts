import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdatePostValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
	title: schema.string.optional({ trim: true }, [
		rules.maxLength(64)
	]),
	context: schema.string.optional({ trim: true }, [
		rules.minLength(10)
	]),
})

public messages = {
	'required': '{{ field }} is required',
	'maxLength': 'maximum allowed length for {{ field }} is {{ options.maxLength }} characters',
	'minLength': 'minimum allowed length for {{ field }} is {{ options.minLength }} characters',
}
}
