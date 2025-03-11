import { BaseModelDto } from '@adocasts.com/dto/base'
import User from '#models/user'
import RoleDto from '#dtos/role'
import EmailHistoryDto from '#dtos/email_history'
import PasswordResetTokenDto from '#dtos/password_reset_token'
import LessonDto from '#dtos/lesson'

export default class UserDto extends BaseModelDto {
  declare id: number
  declare roleId: number
  declare fullName: string | null
  declare email: string
  declare password: string
  declare createdAt: string
  declare updatedAt: string | null
  declare role: RoleDto | null
  declare emailHistories: EmailHistoryDto[]
  declare passwordResetTokens: PasswordResetTokenDto[]
  declare lessons: LessonDto[]

  constructor(user?: User) {
    super()

    if (!user) return
    this.id = user.id
    this.roleId = user.roleId
    this.fullName = user.fullName
    this.email = user.email
    this.password = user.password
    this.createdAt = user.createdAt.toISO()!
    this.updatedAt = user.updatedAt?.toISO()!
    this.role = user.role && new RoleDto(user.role)
    this.emailHistories = EmailHistoryDto.fromArray(user.emailHistories)
    this.passwordResetTokens = PasswordResetTokenDto.fromArray(user.passwordResetTokens)
    this.lessons = LessonDto.fromArray(user.lessons)
  }
}