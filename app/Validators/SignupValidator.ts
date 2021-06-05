import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SignupValidator {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({
		username: schema.string({ 'trim': true }, [
			rules.regex(/^[a-zA-Z0-9_\-][a-zA-Z0-9_\-]*$/),
			rules.minLength(5),
			rules.maxLength(64),
			rules.unique({
				table: 'users',
				column: 'username',
				caseInsensitive: false
			})
		]),
		email: schema.string({ 'trim': true }, [
			rules.email(),
			rules.maxLength(64),
			rules.unique({
				table: 'users',
				column: 'email',
				caseInsensitive: true
			})
		]),
		password: schema.string({}, [rules.maxLength(128)])
	})

	public messages = {
		'required': '{{ field }} is required',
		'username.unique': 'the provided username already has taken, choose another one',
		'username.regex': 'just alphabet, \'_\' and \'-\' characters are allowed',
		'username.minLength': 'minimum of allowed length for username is 5 characters',
		'username.maxLength': 'maximum of allowed length for username is 64 characters',
		'email.unique': 'the provided email already has taken, choose another one',
		'email.email': 'please provide a valid email instead',
		'email.maxLength': 'maximum of allowed length for email is 64 characters',
		'password.maxLength': 'maximum of length for password is 128 characters'
	}
}
