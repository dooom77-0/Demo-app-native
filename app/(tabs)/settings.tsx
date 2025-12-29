import {  Text, View, Switch, StyleSheet } from 'react-native'
import { useContext } from 'react'
import { ThemeContext } from '@/hooks/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-native-paper';

const Settings = () => {
  const { t, i18n } = useTranslation();
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme, toggleTheme, colors } = context;
  const c = colors[theme];
  return (
    <View style={{ backgroundColor: c.background, flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: c.text, fontSize: 16, marginTop: 20}}>{t("settings")}</Text>
      <View style={styles.Switch}>
        <Text>{t("theme")}</Text>
        <Switch
          value={theme === "dark"}
          onValueChange={toggleTheme}
        />
      </View>
      <View style={styles.Switch}>
        <Text>{t("Language")}</Text>
        <Button onPress={() => i18n.changeLanguage("en")}>English</Button>
        <Button onPress={() => i18n.changeLanguage("ar")}>Arabic</Button>
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  Switch: {
    marginRight: 10,
    marginLeft: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20
  }
})
