import vine from '@vinejs/vine'

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().maxLength(254).email(),
    password: vine.string().minLength(8),
  })
)
