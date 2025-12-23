import { StyleSheet, Text, View } from 'react-native'
import { Button , TextInput } from 'react-native-paper'
import { router, Stack } from 'expo-router'
import { useState } from 'react'

const Signup = () => {
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
        <Text style={styles.title}>Signup</Text>
        
        <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        label='Username'
        mode='outlined'
        autoCapitalize='none'
        activeOutlineColor='#307887'
        placeholder='Enter username'
        placeholderTextColor={'gray'}
        right={<TextInput.Icon icon="account" />}
        />
        <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        label='Email'
        mode='outlined'
        activeOutlineColor='#307887'
        placeholder='Enter email'
        placeholderTextColor={'gray'}
        right={<TextInput.Icon icon="email" />}
        />
        <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        label='Password'
        mode='outlined'
        activeOutlineColor='#307887'
        placeholder='Enter password'
        placeholderTextColor={'gray'}
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        />
        
        {error && <Text style={styles.error}>{error}</Text>}
        
        <Button
        style={styles.button}
        mode='contained'
        onPress={handleSignup}
        >Sign up</Button>
        
        <Button
        labelStyle={styles.login}
        style={styles.login}
        mode='text'
        onPress={() => router.replace('./Login')}
        >Already have an account ? Login</Button>
        </View>
      </>
    
  )
}

export default Signup

const styles = StyleSheet.create({
    container: {
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