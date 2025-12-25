import { Stack } from "expo-router";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import './global.css';
export default function RootLayout() {
  const [isLogin] = useState<boolean>(false);
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
    {!isLogin ? 
    (
      <Stack.Screen name="Login" options={{headerShown: false}} />
    ) : 
    (
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    )}
  </Stack>
    </SafeAreaProvider>
    );
}
