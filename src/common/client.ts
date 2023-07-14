import { AuthStore } from 'auth/providers'
import ky from 'ky'

export const client = ky.extend({
  prefixUrl: "http://34.196.61.152:3000",
  hooks: {
    beforeRequest: [
      request => {
        const { token } = AuthStore.getState()

        if (token) {
          request.headers.append('Authorization', `Bearer ${token}`)
        }
      },
    ],
    afterResponse: [
      (_request, _options, response) => {
        if (response.status === 401) {
          AuthStore.getState().logout()
          window.location.replace('/')
        }
      },
    ],
  },
})
