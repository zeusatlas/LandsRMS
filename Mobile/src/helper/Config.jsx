
import AsyncStorage from '@react-native-async-storage/async-storage';

const isDev = true;

let Config = [
  {
    APP_NAME: 'Showvana',
    APP_ALLIASE: 'Sv-Flow',
    APP_VERSION: 'Community e2',
    BRAND_NAME: 'SkaiMount',
    BASE_URL: isDev
      ? 'http://172.30.83.142:8000/api/srm/v1'
      : 'https://your-production-url.com/api/srm/v1',
    headers: {
      'Content-Type': 'application/json',
    },
    formHeaders: {
      'Content-Type': 'multipart/form-data',
    },
  }
];

// Inject user token at load time
(async () => {
  try {
    const userDataString = await AsyncStorage.getItem('userData');
    const userData = userDataString ? JSON.parse(userDataString) : null;

    if (userData?.token) {
      Config[0].headers['Authorization'] = `Bearer ${userData.token}`;
      Config[0].formHeaders['Authorization'] = `Bearer ${userData.token}`;
    }
  } catch (error) {
    console.error('Failed to load userData for config:', error);
  }
})();

export default Config;
