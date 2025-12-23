import { StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { router } from 'expo-router';
const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    function handleLogin() {
        if(email && password) {
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Login successful!');
            router.replace('./(tabs)');
        }
        if(!email || !password) {
            setError('Please enter email and password');
            return;
        }
        if(password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
    }
    return (
      
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
      
        <TextInput
        style={styles.input}
        label='Email'
        keyboardType='email-address'
        mode='outlined'
        autoCapitalize='none'
        error={!!error}
        activeOutlineColor='#307887'
        placeholder='example@gmail.com'
        placeholderTextColor={'gray'}
        value={email}
        onChangeText={setEmail}
        right={<TextInput.Icon icon="email"  />}
         />
         
         
        <TextInput
        style={styles.input}
        label='password'
        mode='outlined'
        activeOutlineColor='#307887'
        secureTextEntry
        error={!!error}
        placeholder='Enter password'
        placeholderTextColor={'gray'}
        value={password}
        onChangeText={setPassword}
        right={<TextInput.Icon icon="eye"  />}
          />



        {error && <Text style={{ color: 'red' }}>{error}</Text>}

          

        <Button 
        mode='contained' 
        style={styles.button}
        onPress={handleLogin}
        >Login
        </Button>
        
          

        <Button 
        labelStyle={styles.textButton}
        mode='text' 
        style={styles.textButton}
        onPress={() => router.replace('./Signup')}
        >Do not have an account ? Signup
        </Button>
        
    </View>
  )
}

export default Login







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
        marginTop: 10,
        borderColor:"gray",
    },
    button: {
        width: '50%',
        marginTop: 20,
        backgroundColor: '#007AFF',
        paddingVertical: 5,
        borderRadius: 20,
        alignItems: 'center',
        
    },
    textButton: {
        marginTop: 20,
        color: '#007AFF',
    }
})