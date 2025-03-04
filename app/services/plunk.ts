import env from '#start/env'

class PlunkService {
  private static addContactEvent = 'create-contact-e-unlock'

  private baseURL: string
  private headers: { [key: string]: string }

  constructor() {
    this.baseURL = 'https://api.useplunk.com/v1'
    this.headers = {
      'Authorization': `Bearer ${env.get('PLUNK_API_KEY')}`,
      'Content-Type': 'application/json',
    }
  }

  async addContactOrFail(email: string) {
    const body = {
      event: PlunkService.addContactEvent,
      email,
      subscribed: true,
      data: {}
    }

    const options = {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    }

    try {
      const response = await fetch(`${this.baseURL}/track`, options)

      if (!response.ok) {
        throw new Error('Failed to add contact')
      }

      return response.json()
    } catch(error) {
      throw new Error('Failed to add contact : ' + error.message)
    }
  }
}

const plunkService = new PlunkService()
export default plunkService
