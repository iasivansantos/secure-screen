import { api } from '@/services/api'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

export const useLock = () => {
  return useMutation(
    async () => {
      const response = await api.post('/secure-screens/lock')

      return response.data
    },
    {
      onError: (error: AxiosError) => {
        const statusCode = error.response?.status

        if (statusCode === 423) {
          toast.error(
            'Tela bloqueada por outro usuário. Não será possível acessar.',
          )
        } else {
          toast.error(
            'Ocorreu um erro ao tentar bloquear a tela. Tente novamente.',
          )
        }
      },
    },
  )
}

export const useUnlock = () => {
  return useMutation(
    async () => {
      const response = await api.post('/secure-screens/unlock')

      return response.data
    },
    {
      onError: (error: AxiosError) => {
        const statusCode = error.response?.status

        if (statusCode === 404) {
          toast.error('Não há bloqueio para ser liberado.')
        } else {
          toast.error(
            'Ocorreu um erro ao tentar desbloquear a tela. Tente novamente.',
          )
        }
      },
    },
  )
}
