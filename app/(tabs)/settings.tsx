import {  Text, View, Switch } from 'react-native'
import { useContext } from 'react'
import { ThemeContext } from '@/hooks/ThemeContext';

const Settings = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme, toggleTheme, colors } = context;
  const c = colors[theme];
  return (
    <View style={{ backgroundColor: c.background, flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: c.text }}>settings</Text>
      <Switch value={theme === "dark"}
        onValueChange={toggleTheme}
        thumbColor={theme === "dark" ? "#f4f4f5" : "#fff"}
        trackColor={{ false: "#94a3b8", true: "#3b82f6" }}
      />
    </View>
  )
}

export default Settings

