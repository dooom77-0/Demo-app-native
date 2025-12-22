import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
const _layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor:"coral"}}>
      <Tabs.Screen name="index" options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <FontAwesome name="home" size={24} color={color} />
        ),
         }} />
      <Tabs.Screen name="Login" options={{
        title: 'Login',
         headerShown: false,
        tabBarIcon: ({ color }) => (
          <FontAwesome name="user" size={24} color={color} />
        ),
         }} />
    </Tabs>
  )
}

export default _layout