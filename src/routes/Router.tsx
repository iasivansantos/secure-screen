import { Route, Routes } from 'react-router-dom'

import { IndexSecureScreen } from '@/pages/SecureScreen/IndexSecureScreen'
import { Header } from '@/components/Header'

export function Router() {
  return (
    <Header>
      <Routes>
        <Route path="/" element={<IndexSecureScreen />} />
      </Routes>
    </Header>
  )
}
