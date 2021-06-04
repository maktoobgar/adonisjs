import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginValidator {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({
		username: schema.string.optional({'trim': true}, [rules.regex(/^[a-zA-Z0-9_\-][a-zA-Z0-9_\-]*$/), rules.minLength(5), rules.maxLength(64), rules.requiredIfNotExists('email')]),
		email: schema.string.optional({'trim': true}, [rules.email(), rules.maxLength(64), rules.requiredIfNotExists('username')]),
		password: schema.string({}, [rules.maxLength(128)]),
	})

	public messages = {
		'required': '{{ field }} is required',
		'username.requiredIfNotExists': 'username is required when no email provided',
		'username.regex': 'just alphabet, \'_\' and \'-\' characters are allowed',
		'username.minLength': 'minimum of allowed length for username is 5 characters',
		'username.maxLength': 'maximum of allowed length for username is 64 characters',
		'email.requiredIfNotExists': 'email is required when no username provided',
		'email.email': 'please provide a valid email instead',
		'email.maxLength': 'maximum of allowed length for email is 64 characters',
		'password.required': 'password is required',
		'password.maxLength': 'maximum of length for password is 128 characters'
	}
}
