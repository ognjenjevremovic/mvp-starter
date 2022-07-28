import { defineStore } from 'pinia'

import type { Message } from '@/common/models/message'

import { delay } from '@/common/functions/delay'

interface HelloState {
  message: string
}

export const useHelloStore = defineStore('test-working', {
  state: (): HelloState => ({
    message: '',
  }),
  actions: {
    async getMessage() {
      const response = await fetch('/api/hello', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      await delay()
      const data = (await response.json()) as Message
      this.message = data.message
    },
  },
})
