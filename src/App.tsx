import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'

import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Router } from './routes/Router'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './styles/toastifyStyles.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'DM Sans, sans-serif',
          globalStyles: (theme) => ({
            body: {
              backgroundColor: theme.colors.gray[1],
            },
          }),
        }}
      >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </MantineProvider>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </QueryClientProvider>
  )
}
