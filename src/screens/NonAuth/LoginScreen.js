// LoginScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { loginUser } from '../../api/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {

        console.log("username" , username)
        console.log("password" , password)

        try {
            const response = await loginUser(username, password);

            console.log("responseresponse" , response)


            const token = response.token;
            // Save token to AsyncStorage
            await AsyncStorage.setItem('token', token);
            // Navigate to Dashboard
            navigation.navigate('Dashboard');
        } catch (error) {
            Alert.alert('Error', 'Invalid username or password');
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Username"
                value={username}
                style={{color: "black"}}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                style={{color: "black"}}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
