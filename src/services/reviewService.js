import axiosInstance from '../config/axios';

export const getReviews = async (filters = {}) => {
  try {
    const response = await axiosInstance.get('/pharmacy-review', {
      params: filters,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};