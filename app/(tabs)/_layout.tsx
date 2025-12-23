import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
const _layout = () => {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#3B82F6",
      tabBarInactiveTintColor: "#9CA3AF",
      tabBarStyle: {
        backgroundColor: '#111827',
        borderTopWidth: 0,
        height: 60,
    } }}>
      <Tabs.Screen name="index" options={{
        title: 'Home',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="home" size={24} color={color} />
        ),
      }} />
      <Tabs.Screen name="profile" options={{
        title: 'Profile',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="user" size={24} color={color} />
        ),
      }} />
    </Tabs>
  )
}

export default _layout;

