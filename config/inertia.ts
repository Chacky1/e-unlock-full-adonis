import UserDto from '#dtos/user'
import { defineConfig } from '@adonisjs/inertia'
import type { InferSharedProps, PageProps } from '@adonisjs/inertia/types'

const inertiaConfig = defineConfig({
  /**
   * Path to the Edge view that will be used as the root view for Inertia responses
   */
  rootView: 'inertia_layout',

  /**
   * Data that should be shared with all rendered pages
   */
  sharedData: {
    user: (ctx) => {
      const user = ctx.auth.use('web').user
      return user && new UserDto(user)
    },
    isAuthenticated: (ctx) => {
      return ctx.auth.use('web').check()
    },
    exceptions: (ctx) => ctx.session.flashMessages.get('errorsBag') ?? {},
    messages: (ctx) => ctx.session.flashMessages.all() ?? {},
    //errors: (ctx) => ctx.inertia.always(() => ctx.session?.flashMessages.get('errors')),
  },

  /**
   * Options for the server-side rendering
   */
  ssr: {
    enabled: true,
    entrypoint: 'inertia/app/ssr.tsx'
  }
})

export default inertiaConfig

declare module '@adonisjs/inertia/types' {
  export interface SharedProps extends InferSharedProps<typeof inertiaConfig>, PageProps {}
}
