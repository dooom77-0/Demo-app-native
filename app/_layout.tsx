import "@/i18n/i18n";
import { Stack } from "expo-router";
import { useState } from "react";
import './global.css';
import { ThemeProvider } from "@/hooks/ThemeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function RootLayout() {
  const [isLogin] = useState<boolean>(false);
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
        <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
      {!isLogin ? 
      (
        <Stack.Screen name="Signup" options={{headerShown: false}} />
      ) : 
      (
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      )}
        </Stack>
        </ThemeProvider>
    </SafeAreaProvider>
    
    );
}
