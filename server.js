require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db'); // MongoDB connection
const formsRoutes = require('./routes/forms');

const app = express();


connectDB();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Form Builder Backend is running!');
});


app.use('/api/forms', formsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
