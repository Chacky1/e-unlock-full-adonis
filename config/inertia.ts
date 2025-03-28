import UserDto from '#dtos/user'
import User from '#models/user'
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
    isAuthenticated: (ctx) => {
      return ctx.auth?.isAuthenticated
    },
    user: async (ctx) => {
      if (!ctx.auth?.user) {
        return null
      }

      const user = await User.query().preload('lessons').where('id', ctx.auth.user.id).firstOrFail()

      return new UserDto(user)
    },
    //exceptions: (ctx) => ctx.session.flashMessages.get('errorsBag') ?? {},
    //messages: (ctx) => ctx.session.flashMessages.all() ?? {},
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
