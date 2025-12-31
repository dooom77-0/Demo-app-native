import {  Text, View, Switch, StyleSheet, TouchableOpacity } from 'react-native'
import { useContext } from 'react'
import { ThemeContext } from '@/hooks/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-native-paper';
import { router } from 'expo-router';


const Settings = () => {
  const { t, i18n } = useTranslation();
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme, toggleTheme, colors } = context;
  const c = colors[theme];
  
  return (
    <View style={{ backgroundColor: c.background, flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* Card 1 */}
      <View
        style={styles.Card}
      >
        <Text
          style={{ color: c.text, fontSize: 16, fontWeight: "bold" , textAlign:"center"}}
        >{t("appearance")}</Text>

        <View style={styles.ThemeRow}>
          <Text style={{ color: c.text, fontSize: 16, fontWeight: "bold"}}>{t("theme")}</Text>
          <Switch
            style={{ marginRight: 10, marginBottom: 15 }}
            value={theme === "dark"}
            onValueChange={toggleTheme}
            thumbColor={c.background}
            trackColor={{ true: "#FFFFFF", false: "#000000" }}
          />
        </View>
        <View
          style={styles.CardRow}
        >
          <Text
            style={{ color: c.text, fontSize: 16, fontWeight: "bold"}}
          >{t("lang")}</Text>
          <Button
            style={{  marginLeft: 10 }}
            onPress={() => i18n.changeLanguage('en')}
            buttonColor= {c.background}
            textColor= {c.text}
          >English</Button>
          <Button 
          style={{ marginBottom: 10 }} 
          onPress={() => i18n.changeLanguage('ar')}
          buttonColor={c.background}
          textColor={c.text}
          >عربي</Button>
        </View>
      </View>
      {/* Card 2 */}
      <View style={styles.Card}>
        <Text
          style={{ color: c.text, fontSize: 16, fontWeight: "bold", marginBottom: 40 , textAlign:"center"}}
        >{t("App")}</Text>

        <View style={styles.Card}>
          <TouchableOpacity
            style={styles.Logout}
            onPress={() => router.replace('/Login')}
          >
            <Text style={{ color: c.text, fontSize: 16, fontWeight: "bold" }}>{t("logout")}</Text>
          </TouchableOpacity>
          <View style={styles.Version}>
            <Text style={{ color: c.text, fontSize: 16, fontWeight: "bold"}}>{t("version")}</Text>
            <Text style={{ color: c.text, fontSize: 16, fontWeight: "bold" }}>1.0.0</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  Card: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 20
  },
  ThemeRow: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  CardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    gap: 10
  },
  Logout: {
    backgroundColor: "#ff5060",
    padding: 15,
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  Version: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  }

})
