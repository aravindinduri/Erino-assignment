import React, { useState, useEffect } from 'react';
import { fetchContacts, addContact, updateContact, deleteContact } from '../services/contactService';
import ContactForm from '../components/ContactForm';
import ContactTable from '../components/ContactTable';
import { Box, Typography } from '@mui/material';

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const data = await fetchContacts();
        setContacts(data);
      } catch (err) {
        console.error('Error Occured while loading', err);
      }
    };
    loadContacts();
  }, []);

  const handleAddOrEdit = async (contact) => {
    try {
      if (editingContact) {
        const updatedContact = await updateContact(editingContact._id, contact);
        setContacts(contacts.map((c) => (c._id === updatedContact._id ? updatedContact : c)));
      } else {
        const newContact = await addContact(contact);
        setContacts([...contacts, newContact]);
      }
      setEditingContact(null);
    } catch (err) {
      console.error('Error Occured while add or edit', err);
    }
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
  };

  const handleDelete = async (id) => {
    try {
      await deleteContact(id);
      setContacts(contacts.filter((contact) => contact._id !== id));
    } catch (err) {
      console.error('Error Occured while deleting', err);
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Contact Management
      </Typography>
      <ContactForm onSubmit={handleAddOrEdit} editingContact={editingContact} />
      <Box sx={{ marginTop: 4 }}>
        <ContactTable contacts={contacts} onEdit={handleEdit} onDelete={handleDelete} />
      </Box>
    </Box>
  );
};

export default Home;
