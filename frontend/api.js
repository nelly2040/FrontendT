import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; 

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    const { token, user } = response.data;  
    localStorage.setItem('token', token);   
    return user;                            
  } catch (error) {
    throw error.response?.data || { message: 'Error during login.' }; 
  }
};

export const register = async (name, email, password) => {
  try {
    const response = await api.post('/auth/register', { name, email, password });
    return response.data; 
  } catch (error) {
    throw error.response?.data || { message: 'Error during registration.' };
  }
};

export const getTours = async () => {
  try {
    const response = await api.get('/tours');
    return response.data; 
  } catch (error) {
    throw error.response?.data || { message: 'Error fetching tours.' };
  }
};

export const createBooking = async (bookingData) => {
  try {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Error creating booking.' };
  }
};

export default api;
