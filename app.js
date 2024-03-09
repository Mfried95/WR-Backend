// app.js
import express from 'express';
import sequelize from "./config/database.js";
import Review from './models/reviews.js'; // Ensure the path is correct

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Connect to server and database
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  sequelize.sync({ force: true })
    .then(() => {
      console.log('Database synced');
    })
    .catch(err => {
      console.error('Error syncing database:', err);
    });
});


// ROUTESv
app.get('/', async (req, res) => {
  res.send('Hello World');
});

// Routes for reviews //

// Get reviews
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Post reviews
app.post('/api/reviews', async (req, res) => {
  try {
    const { username, title, body } = req.body;
    const newReview = await Review.create({ username, title, body });
    res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating review');
  }
});


