const MailerController = () => import('#controllers/mailer_controller')

import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

router.post('/mailer/contacts', [MailerController, 'addContact']).as('mailer.contacts.add')

router.post('/users/:userId/lessons/:lessonId/complete', [UsersController, 'completeLesson']).as('users.lessons.complete')
router.delete('/users/:userId/lessons/:lessonId/uncomplete', [UsersController, 'incompleteLesson']).as('users.lessons.incomplete')
