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
          style={{ color: c.text, fontSize: 16, fontWeight: "bold", marginBottom: 40 , textAlign:"center"}}
        >{t("appearance")}</Text>

        <View style={styles.ThemeRow}>
          <Text style={styles.RowTitle}>{t("theme")}</Text>
          <Switch
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
            style={styles.RowTitle}
          >{t("lang")}</Text>
          <Button
            style={{ marginRight: 10, marginLeft: 10, width: 100 }}
            onPress={() => i18n.changeLanguage('en')}
            buttonColor= {c.background}
            textColor= {c.text}
          >English</Button>
          <Button 
          style={{ marginRight: 10 }} 
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
            <Text style={styles.RowTitle}>{t("logout")}</Text>
          </TouchableOpacity>
          <View style={styles.Version}>
            <Text style={styles.RowTitle}>{t("version")}</Text>
            <Text style={styles.RowTitle}>1.0.0</Text>
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
  RowTitle: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
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
