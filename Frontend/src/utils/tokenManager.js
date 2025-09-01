// tokenManager.js
import axios from 'axios';
import Cookies from 'js-cookie';
import { saveUserToStorage, getUserFromStorage, logout, getLastActiveTime } from './authStorage';
import { setAuthHeaders } from '../helpers/config';

let refreshTimer;
const BASE_URL = `${window.location.protocol}//${window.location.hostname}:8000/svf/api/v2`;
const INACTIVITY_LIMIT_MS = 60 * 60 * 1000; // 1 hour

export const scheduleTokenRefresh = () => {
  clearTimeout(refreshTimer);

  const user = getUserFromStorage();
  if (!user?.expiresAt) return;

  const now = Date.now();
  const refreshTime = user.expiresAt - 5 * 60 * 1000; // 5 mins before expiry
  const delay = refreshTime - now;

  if (delay <= 0) {
    maybeRefreshToken();
  } else {
    refreshTimer = setTimeout(maybeRefreshToken, delay);
  }
};

export const maybeRefreshToken = () => {
  const now = Date.now();
  const lastActive = getLastActiveTime();

  if (now - lastActive > INACTIVITY_LIMIT_MS) {
    console.warn("User inactive too long. Skipping token refresh.");
    return; // Don't refresh if session expired
  }

  refreshToken();
};

export const refreshToken = async () => {
  const user = getUserFromStorage();
  const refreshToken = Cookies.get('refresh_token');

  if (!refreshToken) {
    console.warn("No refresh token. Logging out.");
    logout();
    return;
  }

  try {
    const response = await axios.post(`${BASE_URL}/public/authentication/refresh-token`, { refreshToken });
    const { token, refresh_token, sv_key, sv_label, expires_in } = response.data;

    if (!expires_in || expires_in < 60) {
      console.warn("Invalid token expiry. Logging out.");
      logout();
      return;
    }

    const updatedUser = { ...user, token, refresh_token, sv_key, sv_label, expires_in };
    saveUserToStorage(updatedUser);
    setAuthHeaders();
    scheduleTokenRefresh();

  } catch (error) {
    console.error("Token refresh failed:", error);
    logout();
  }
};
