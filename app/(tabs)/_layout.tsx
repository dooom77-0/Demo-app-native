import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {  SafeAreaView } from 'react-native-safe-area-context';
const _layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
        title: 'Home',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="home" size={30} color={color} />
        ),
      }} />
      <Tabs.Screen name="settings" options={{
        title: 'Settings',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="cog" size={30} color={color} />
        ),
      }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={30} color={color} />
          ),
        }}
      />

      
    </Tabs>
    </SafeAreaView>
    
  )
}

export default _layout;

