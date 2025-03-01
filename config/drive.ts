import env from '#start/env'
import { defineConfig, services } from '@adonisjs/drive'

const driveConfig = defineConfig({
  default: env.get('DRIVE_DISK'),

  /**
   * The services object can be used to configure multiple file system
   * services each using the same or a different driver.
   */
  services: { 
    gcs: services.gcs({
      credentials: env.get('GCS_KEY') ? {
        credential_source: {
          file: env.get('GCS_KEY')!,
        },
        subject_token_type: '',
        audience: '',
      } : undefined,
      bucket: env.get('GCS_BUCKET'),
      visibility: 'public',
    }),
  },
})

export default driveConfig

declare module '@adonisjs/drive/types' {
  export interface DriveDisks extends InferDriveDisks<typeof driveConfig> {}
}
