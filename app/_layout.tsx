import { Stack } from "expo-router";
import { useState } from "react";
import './global.css';
import { ThemeProvider } from "@/hooks/ThemeContext";
export default function RootLayout() {
  const [isLogin] = useState<boolean>(false);
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
    {!isLogin ? 
    (
      <Stack.Screen name="Login" options={{headerShown: false}} />
    ) : 
    (
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    )}
      </Stack>
    </ThemeProvider>
    );
}
