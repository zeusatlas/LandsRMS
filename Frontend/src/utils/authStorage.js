import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

const SECRET_KEY = import.meta.env.VITE_SESSION_KEY;
const isSecure = window.location.protocol === 'https:';

const COOKIE_OPTIONS = {
  secure: isSecure,
  sameSite: 'Strict',
  path: '/',
};

export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

export const decryptData = (cipherText) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

export const saveUserToStorage = (data) => {
  const { token, refresh_token, sv_key, sv_label, expires_in, ...user } = data;
  const expiresAt = Date.now() + expires_in * 1000;

  const userData = { ...user, expiresAt, loginStatus: 'authenticated' };
  const encrypted = encryptData(userData);

  localStorage.setItem('app_user', encrypted);

  Cookies.set('access_token', token, { ...COOKIE_OPTIONS, expires: 1 });
  Cookies.set('refresh_token', refresh_token, { ...COOKIE_OPTIONS, expires: 1 });
  Cookies.set('sv_key', sv_key, COOKIE_OPTIONS);
  Cookies.set('sv_label', sv_label, COOKIE_OPTIONS);
};

export const getUserFromStorage = () => {
  const encrypted = localStorage.getItem('app_user');
  if (!encrypted) return null;

  try {
    return decryptData(encrypted);
  } catch (e) {
    console.error("Failed to decrypt user data:", e);
    return null;
  }
};

export const clearUserStorage = () => {
  localStorage.removeItem('app_user');
  Cookies.remove('access_token');
  Cookies.remove('refresh_token');
  Cookies.remove('sv_key');
  Cookies.remove('sv_label');
};

export const logout = () => {
  clearUserStorage();
  window.location.href = "/auth/logout";
};

export const expireUserSession = () => {
  const user = getUserFromStorage();
  if (!user) return;

  const expiredUser = { ...user, loginStatus: null };
  saveUserToStorage(expiredUser);
  window.location.href = "/auth/logout";
};


export const setLastActiveTime = () => {
  localStorage.setItem('last_active_time', Date.now().toString());
};

export const getLastActiveTime = () => {
  const ts = localStorage.getItem('last_active_time');
  return ts ? parseInt(ts, 10) : 0;
};
