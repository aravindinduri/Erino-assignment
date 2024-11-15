import express from 'express';
import cors from 'cors';
import connectDB  from './configDB/db.js';
import contactRoutes from './routes/contact.route.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
