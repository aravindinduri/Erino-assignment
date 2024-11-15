import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';

const ContactForm = ({ onSubmit, editingContact }) => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    jobTitle: '',
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
      setIsFormVisible(true);
    } else {
      setContact({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        jobTitle: '',
      });
    }
  }, [editingContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contact);
    setContact({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      company: '',
      jobTitle: '',
    });
    setIsFormVisible(false);
  };

  return (
    <Box>
      {!isFormVisible ? (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsFormVisible(true)}
          sx={{ textTransform: 'none' }}
        >
          {editingContact ? 'Edit Contact' : 'Add New Contact'}
        </Button>
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            padding: 2,
            backgroundColor: '#1e1e1e',
            borderRadius: 2,
            boxShadow: 3,
            marginTop: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={contact.firstName}
                onChange={handleChange}
                variant="outlined"
                color="primary"
                InputLabelProps={{ style: { color: '#bbb' } }}
                InputProps={{
                  style: { color: '#fff' },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={contact.lastName}
                onChange={handleChange}
                variant="outlined"
                color="primary"
                InputLabelProps={{ style: { color: '#bbb' } }}
                InputProps={{
                  style: { color: '#fff' },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={contact.email}
                onChange={handleChange}
                variant="outlined"
                color="primary"
                InputLabelProps={{ style: { color: '#bbb' } }}
                InputProps={{
                  style: { color: '#fff' },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                value={contact.phoneNumber}
                onChange={handleChange}
                variant="outlined"
                color="primary"
                InputLabelProps={{ style: { color: '#bbb' } }}
                InputProps={{
                  style: { color: '#fff' },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Company"
                name="company"
                value={contact.company}
                onChange={handleChange}
                variant="outlined"
                color="primary"
                InputLabelProps={{ style: { color: '#bbb' } }}
                InputProps={{
                  style: { color: '#fff' },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Job Title"
                name="jobTitle"
                value={contact.jobTitle}
                onChange={handleChange}
                variant="outlined"
                color="primary"
                InputLabelProps={{ style: { color: '#bbb' } }}
                InputProps={{
                  style: { color: '#fff' },
                }}
              />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, marginTop: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ textTransform: 'none' }}
            >
              {editingContact ? 'Update Contact' : 'Add Contact'}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setIsFormVisible(false)}
              sx={{ textTransform: 'none' }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ContactForm;
