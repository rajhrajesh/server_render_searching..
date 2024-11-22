import axios from 'axios';

export const fetchStories = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
