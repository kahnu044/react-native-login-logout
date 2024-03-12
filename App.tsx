// App.js

import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      setIsLoggedIn(!!token); // Update isLoggedIn based on token existence


      console.log("tokentoken" , token)
      console.log("isLoggedIn" , isLoggedIn)
    } catch (error) {
      console.error('Error checking authentication:', error);
    }
  };

  return <AppNavigator isLoggedIn={isLoggedIn} />;
};

export default App;
