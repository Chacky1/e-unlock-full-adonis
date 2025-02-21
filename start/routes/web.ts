import HomeController from '#controllers/home_controller'
import router from '@adonisjs/core/services/router'

router.get('/', [HomeController, 'show']).as('home')
