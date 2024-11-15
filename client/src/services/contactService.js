import axios from 'axios';

const API_URL = 'http://localhost:5000/api/contacts';

export const fetchContacts = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response)
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch contacts');
  }
};

export const addContact = async (contact) => {
  try {
    const response = await axios.post(API_URL, contact);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add contact');
  }
};

export const updateContact = async (id, contact) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, contact);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update contact');
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete contact');
  }
};
