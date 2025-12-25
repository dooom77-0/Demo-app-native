import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
const _layout = () => {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#f239a2",
      tabBarInactiveTintColor: "#9CA3AF",
      tabBarStyle: {
        backgroundColor: "#1E293B",
        borderTopWidth: 0,
        height: 70,
        paddingTop: 5
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "bold"
      }
      }}>
      <Tabs.Screen name="index" options={{
        title: 'Todos',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="flash" size={30} color={color} />
        ),
      }} />
      <Tabs.Screen name="settings" options={{
        title: 'Settings',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="cog" size={30} color={color} />
        ),
      }}
      />

      
    </Tabs>
  )
}

export default _layout;

