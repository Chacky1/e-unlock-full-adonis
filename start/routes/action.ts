const MailerController = () => import('#controllers/mailer_controller')

import router from '@adonisjs/core/services/router'

router.post('/mailer/contacts', [MailerController, 'addContact']).as('mailer.contacts.add')
