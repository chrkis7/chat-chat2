import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'Home' }} />
      <Stack.Screen name='login' options={{ title: 'Login' }} />
      <Stack.Screen name='register' options={{ title: 'Register' }} />
      <Stack.Screen name='chat'  options={{ title: 'Chat' }} />
    </Stack>
  )
}

export default RootLayout