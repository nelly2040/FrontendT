import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tours';

export const getTours = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};