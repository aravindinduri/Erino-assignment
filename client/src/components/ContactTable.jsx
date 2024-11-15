import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Grid,
  useMediaQuery,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  CircularProgress,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const ContactTable = ({ contacts, onEdit, onDelete, isLoading }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '50vh',
        }}
      >
        <CircularProgress size={60} sx={{ color: '#fff' }} />
      </Box>
    );
  }

  if (isMobile) {
    return (
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#1e1e1e',
          borderRadius: 2,
          boxShadow: 3,
          padding: 2,
          marginTop: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: '#fff', fontWeight: 'bold', marginBottom: 2 }}
        >
          Contacts
        </Typography>
        <Grid container spacing={2}>
          {contacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((contact) => (
            <Grid
              item
              xs={12}
              key={contact._id}
              sx={{
                backgroundColor: '#2a2a2a',
                padding: 2,
                borderRadius: 1,
                boxShadow: 2,
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: '0.2s',
                },
              }}
            >
              <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>
                {contact.firstName} {contact.lastName}
              </Typography>
              <Typography variant="body2" sx={{ color: '#bbb' }}>
                Email: {contact.email}
              </Typography>
              <Typography variant="body2" sx={{ color: '#bbb' }}>
                Phone: {contact.phoneNumber}
              </Typography>
              <Typography variant="body2" sx={{ color: '#bbb' }}>
                Company: {contact.company}
              </Typography>
              <Typography variant="body2" sx={{ color: '#bbb' }}>
                Job Title: {contact.jobTitle}
              </Typography>
              <Box sx={{ marginTop: 1 }}>
                <IconButton color="primary" onClick={() => onEdit(contact)}>
                  <Edit />
                </IconButton>
                <IconButton color="secondary" onClick={() => onDelete(contact._id)}>
                  <Delete />
                </IconButton>
              </Box>
            </Grid>
          ))}
        </Grid>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={contacts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#1e1e1e',
        borderRadius: 2,
        boxShadow: 3,
        padding: 2,
        marginTop: 2,
      }}
    >
      <TableContainer>
        <Table aria-label="contacts table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#bbb', fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ color: '#bbb', fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ color: '#bbb', fontWeight: 'bold' }}>Phone</TableCell>
              <TableCell sx={{ color: '#bbb', fontWeight: 'bold' }}>Company</TableCell>
              <TableCell sx={{ color: '#bbb', fontWeight: 'bold' }}>Job Title</TableCell>
              <TableCell sx={{ color: '#bbb', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((contact) => (
                <TableRow key={contact._id}>
                  <TableCell>
                    <Typography variant="body1" sx={{ color: '#fff', fontWeight: 600 }}>
                      {contact.firstName} {contact.lastName}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ color: '#fff' }}>{contact.email}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{contact.phoneNumber}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{contact.company}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{contact.jobTitle}</TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => onEdit(contact)}>
                      <Edit />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => onDelete(contact._id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={contacts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </Box>
  );
};

export default ContactTable;
