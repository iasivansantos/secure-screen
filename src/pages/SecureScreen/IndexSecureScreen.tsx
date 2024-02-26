import { useLock, useUnlock } from '@/hooks/useSecureScreen'
import {
  Button,
  Center,
  Divider,
  Drawer,
  Group,
  Stack,
  Text,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export function IndexSecureScreen() {
  const [opened, { open, close }] = useDisclosure(false)

  const lockScreen = useLock()
  const unlockScreen = useUnlock()

  const handleOpen = async () => {
    await lockScreen.mutateAsync()
    open()
  }

  const handleClose = async () => {
    await unlockScreen.mutateAsync()
    close()
  }

  return (
    <>
      <Center>
        <Button onClick={handleOpen}>Acessar tela segura</Button>
      </Center>

      <Drawer
        opened={opened}
        position="right"
        onClose={handleClose}
        size="lg"
        title="Tela segura"
        overlayProps={{ opacity: 0.5, blur: 4 }}
        closeOnClickOutside={false}
        closeOnEscape={false}
      >
        <Divider my="xs" />
        <Stack align="stretch" justify="flex-start">
          <Text>Conteúdo da tela</Text>
          <Group grow>
            <Button
              radius="xs"
              variant="outline"
              type="submit"
              onClick={handleClose}
            >
              Fechar
            </Button>
          </Group>
        </Stack>
      </Drawer>
    </>
  )
}
