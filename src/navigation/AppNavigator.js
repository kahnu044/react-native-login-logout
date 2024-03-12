// AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/NonAuth/LoginScreen';
import ForgotPasswordScreen from '../screens/NonAuth/ForgotPasswordScreen';
import DashboardScreen from '../screens/Auth/DashboardScreen';
import ProfileScreen from '../screens/Auth/ProfileScreen';
import UsersScreen from '../screens/Auth/UsersScreen';

const Stack = createStackNavigator();

const AppNavigator = ({ isLoggedIn }) => {
    return (

        <>
            <NavigationContainer>
                {isLoggedIn ? (
                    <Stack.Navigator>
                        <Stack.Screen name="Dashboard" component={DashboardScreen} />
                        <Stack.Screen name="Profile" component={ProfileScreen} />
                        <Stack.Screen name="Users" component={UsersScreen} />
                    </Stack.Navigator>

                ) : (
                    <Stack.Navigator >
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                    </Stack.Navigator>
                )
                }

            </NavigationContainer>

        </>

    );
};

export default AppNavigator;
