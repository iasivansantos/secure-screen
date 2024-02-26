import { AppShell, Header as HeaderMantine, Text } from '@mantine/core'
import { ReactNode } from 'react'

type HeaderTyoe = {
  children: ReactNode
}

export function Header({ children }: HeaderTyoe) {
  return (
    <AppShell
      padding="md"
      header={
        <HeaderMantine
          height={60}
          p="sm"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text>Teste técnico</Text>
        </HeaderMantine>
      }
    >
      {children}
    </AppShell>
  )
}
