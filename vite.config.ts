import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return defineConfig({
    define: {
      'process.env': env,
    },
    plugins: [react()],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
  })
}
