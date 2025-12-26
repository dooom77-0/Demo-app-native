import { useContext } from "react";
import { ThemeContext } from "@/hooks/ThemeContext";
import { View, Text, Switch, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme, toggleTheme, colors } = context;
  const c = colors[theme];

  const Data = [{
    id: 1,
    name: "محمد",
    age: 20
  },
    {
      id: 2,
      name: "علي",
      age: 15
    },
    {
      id: 3,
      name: "مصطفى",
      age: 30
    },
    
  ]
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ backgroundColor: c.background, flex: 1, alignItems: "center", justifyContent: "center",padding:20 }}>
        <Text
          style={{ color: c.text, fontSize: 16, fontWeight: "bold", marginBottom: 20,textAlign:"center" }}
        >السلام عليكم و رحمة الله و بركاته هذا هو أول تطبيق يستخدم React Native</Text>
        <Image source={require("@/assets/images/favicon.png")} style={{ width: 100, height: 100 }} />
        
        <Ionicons name={theme === "dark" ? "moon" : "sunny"} size={24} color={c.text} style={{ marginTop: 20 }} />
        
        <Switch value={theme === "dark"}
          onValueChange={toggleTheme}
          thumbColor={theme === "dark" ? "#f4f4f5" : "#fff"}
        trackColor={{ false: "#94a3b8", true: "#3b82f6" }}
        />
        
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: c.background, padding: 5, margin: 10, borderRadius: 10 }}>
              <Text style={{ color: c.text }}>Name: {item.name}</Text>
              <Text style={{ color: c.text }}>Age: {item.age}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      </SafeAreaView>
    </>
    
  );
}
