import axios from 'axios';

const API_URL = '/api/events';

const getEvents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getEventById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const createEvent = async (eventData) => {
  const response = await axios.post(API_URL, eventData);
  return response.data;
};

export default {
  getEvents,
  getEventById,
  createEvent,
};
