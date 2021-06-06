import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreatePostValidator {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({
		title: schema.string({ trim: true }, [
			rules.maxLength(64)
		]),
		context: schema.string({ trim: true }, [
			rules.minLength(10)
		]),
	})

	public messages = {
		'required': '{{ field }} is required',
		'maxLength': 'maximum allowed length for {{ field }} is {{ options.maxLength }} characters',
		'minLength': 'minimum allowed length for {{ field }} is {{ options.minLength }} characters',
	}
}
