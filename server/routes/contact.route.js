import express from 'express';
import { createContact, getAllContacts, updateContact, deleteContact } from '../controllers/contactController.js';

const router = express.Router();

router.post('/contacts', createContact);
router.get('/contacts', getAllContacts);
router.put('/contacts/:id', updateContact);
router.delete('/contacts/:id', deleteContact);

export default router;
