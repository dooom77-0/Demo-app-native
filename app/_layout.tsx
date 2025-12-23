import { Stack } from "expo-router";
import { useState} from "react";
import './global.css';
export default function RootLayout() {
  const [isLogin] = useState<boolean>(false);
  return (<Stack>
    {!isLogin ? 
    (
      <Stack.Screen name="Login" options={{headerShown: false}} />
    ) : 
    (
      <Stack.Screen name="index" options={{headerShown: false}} />
    )}
  </Stack>);
}
