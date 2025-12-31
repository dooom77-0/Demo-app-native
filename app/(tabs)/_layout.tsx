import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { useContext} from 'react';
// import { ThemeContext } from '@/hooks/ThemeContext';
const _layout = () => {
  // const context = useContext(ThemeContext);
  // if (!context) return null;
  // const { theme, colors } = context;
  // const c = colors[theme];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#FBBF24",
      tabBarInactiveTintColor: "#94A3B8",
      tabBarStyle: {
        backgroundColor: "#E6F4FE",
        borderTopWidth: 1,
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

