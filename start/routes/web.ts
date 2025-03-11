import HomeController from '#controllers/home_controller'
import LessonsController from '#controllers/lessons_controller'
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router.get('/', [HomeController, 'show']).as('home').use(middleware.silentAuth())

router.group(() => {
  router.get('/legal', async ({ inertia }) => {
    return inertia.render('legals/legal')
  }).as('legals.legal').use(middleware.silentAuth())

  router.get('/terms', async ({ inertia }) => {
    return inertia.render('legals/terms')
  }).as('legals.terms').use(middleware.silentAuth())

  router.get('/privacy-policy', async ({ inertia }) => {
    return inertia.render('legals/privacy-policy')
  }).as('legals.privacy').use(middleware.silentAuth())

  router.get('/cookies', async ({ inertia }) => {
    return inertia.render('legals/cookies')
  }).as('legals.cookies').use(middleware.silentAuth())
}).prefix('legals')

router.get('/courses/:courseSlug/lessons/:lessonId', [LessonsController, 'show']).as('lessons.show').use(middleware.silentAuth())
