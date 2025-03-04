import vine from '@vinejs/vine'

export const addContactValidator = vine.compile(
  vine.object({
    email: vine.string().maxLength(254).email()
  })
)
