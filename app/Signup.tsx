import { StyleSheet, Text, View } from 'react-native'
import { Button , TextInput } from 'react-native-paper'
import { router, Stack } from 'expo-router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';

const Signup = () => {
    const { t } = useTranslation();
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    function handleSignup() {
        if(!username || !email || !password) {
        setError('Please fill all the fields');
        return;
    }else if(password.length < 6) {
        setError('Password must be at least 6 characters long');
        return;
    } else {
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Signup successful!');
        router.replace('./(tabs)');
    }
    }
    
    return (
      <>
      <Stack.Screen options={{headerShown: false}} />
        <View style={styles.container}>
        <Text style={styles.title}>{t("signup")}</Text>
        
        <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        label={t("username")}
        mode='outlined'
        autoCapitalize='none'
        activeOutlineColor='#307887'
        placeholder={t("enter your username")}
        placeholderTextColor={'gray'}
        right={<TextInput.Icon icon="account" />}
        />
        <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        label={t("email")}
        mode='outlined'
        activeOutlineColor='#307887'
        placeholder="example@gmail.com"
        placeholderTextColor={'gray'}
        right={<TextInput.Icon icon="email" />}
        />
        <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        label={t("password")}
        mode='outlined'
        activeOutlineColor='#307887'
        placeholder={t("enter your password")}
        placeholderTextColor={'gray'}
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        />
        
        {error && <Text style={styles.error}>{error}</Text>}
        
        <Button
        style={styles.button}
        mode='contained'
        onPress={handleSignup}
        >{t("signup")}</Button>
        
        <Button
        labelStyle={styles.login}
        style={styles.login}
        mode='text'
        onPress={() => router.replace('./Login')}
                >{t("already?")}{t("login")}</Button>
        </View>
      </>
    
  )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E6F4FE',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        marginBottom: 10,
        borderColor:"gray",
    },
    button: {
        width: '50%',
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#007AFF',
    },
    login: {
        marginTop: 10,
        color: '#007AFF',
    },
    error: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
    }
})