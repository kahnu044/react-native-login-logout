// auth.js

import axios from 'axios';

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post('https://api.developernoob.in/user/login', {
      email: username,
      password: password,
    });

    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
