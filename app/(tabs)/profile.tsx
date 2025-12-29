import { StyleSheet, Text, View, Image } from 'react-native'
import { useContext } from 'react';
import { ThemeContext } from '@/hooks/ThemeContext';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme, colors } = context;
  const c = colors[theme];
  return (
    <View style={{ backgroundColor: c.background, flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80' }}
          style={styles.image}
         />
        <Text style={{ color: c.text, fontSize: 16, padding: 20 }}>{t("profile")}</Text>
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
})