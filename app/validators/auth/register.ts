import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    fullName: vine.string().minLength(3).maxLength(100),
    email: vine.string().email(),
    password: vine.string().minLength(8),
  })
)
