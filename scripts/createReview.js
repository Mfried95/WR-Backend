import sequelize from '../config/database.js'; // One level up from scripts to backend
import Review from '../models/reviews.js'; // Up to backend and then into models

async function createExampleReview() {
  try {
    const reviewData = {
      username: 'exampleUser',
      title: 'Example Review Title',
      body: 'This is an example review body.'
    };

    const newReview = await Review.create(reviewData);
    console.log('Review created:', newReview);
  } catch (error) {
    console.error('Error creating review:', error);
  } finally {
    await sequelize.close(); // Close the connection after operation
  }
}

createExampleReview();