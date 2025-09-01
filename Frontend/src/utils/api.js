// import axios from 'axios';
// import Cookies from 'js-cookie';

// const BASE_URL = `${window.location.protocol}//${window.location.hostname}:8000/svf/api/v2`;

// const instance = axios.create({
//   baseURL: BASE_URL,
// });

// const EXEMPT_PATHS = [
//   '/public/authentication/login',
//   '/public/authentication/reset-password',
//   '/public/authentication/change-password',
//   '/public/authentication/verify-2fa',
//   '/public/authentication/verify-token'
// ];

// instance.interceptors.request.use(config => {
  
//   const isExempt = EXEMPT_PATHS.some(path => config.url?.endsWith(path));

//   if (!isExempt) {
//     const token = Cookies.get('access_token');
//     const sv_key = Cookies.get('sv_key');
//     const sv_label = Cookies.get('sv_label');

//     config.headers = {
//       ...config.headers,
//       'Authorization': token ? `Bearer ${token}` : '',
//       'SV-Key': sv_key || '',
//       'SV-Label': sv_label || '',
//     };
//   }

//   // Set content type
//   if (config.isFormData) {
//     config.headers['Content-Type'] = 'multipart/form-data';
//   } else if (!config.headers['Content-Type']) {
//     config.headers['Content-Type'] = 'application/json';
//   }

//   return config;
// }, error => {
//   return Promise.reject(error);
// });

// export default instance;



import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'sonner';
import { expireUserSession } from './authStorage';

const BASE_URL = `${window.location.protocol}//${window.location.hostname}:8000/svf/api/v2`;

const instance = axios.create({
  baseURL: BASE_URL,
});

const EXEMPT_PATHS = [
  '/public/authentication/login',
  '/public/authentication/reset-password',
  '/public/authentication/change-password',
  '/public/authentication/verify-2fa',
  '/public/authentication/verify-token'
];

// Request interceptor
instance.interceptors.request.use(config => {
  const isExempt = EXEMPT_PATHS.some(path => config.url?.endsWith(path));

  if (!isExempt) {
    const token = Cookies.get('access_token');
    const sv_key = Cookies.get('sv_key');
    const sv_label = Cookies.get('sv_label');

    config.headers = {
      ...config.headers,
      'Authorization': token ? `Bearer ${token}` : '',
      'SV-Key': sv_key || '',
      'SV-Label': sv_label || '',
    };
  }

  // Set content type
  if (config.isFormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else if (!config.headers['Content-Type']) {
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
}, error => {
  return Promise.reject(error);
});

// Response interceptor (handles 401 globally)
instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      toast.error(error.response?.statusText || "Error Found", { description: error.response.data.message, });
      expireUserSession();
    }
    return Promise.reject(error);
  }
);

export default instance;
