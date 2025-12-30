import { useContext } from "react";
import { ThemeContext } from "@/hooks/ThemeContext";
import { View, Text, Image } from "react-native";
import { useTranslation } from 'react-i18next';

export default function Index() {
  const { t } = useTranslation();
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme, colors } = context;
  const c = colors[theme];

 
  return (
    <>
      <View
        style={{ backgroundColor: c.background, flex: 1, alignItems: "center", justifyContent: "center",padding:20 }}>
        <Text
          style={{ color: c.text, fontSize: 16, fontWeight: "bold", marginBottom: 20,textAlign:"center" }}
          >{t("title")}</Text>
        <Image source={require("@/assets/images/favicon.png")} style={{ width: 100, height: 100 }} />
        </View>
        
    </>
    
  );
}
