import sequelize from '../config/database.js'; // One level up from scripts to backend
import reviews from '../models/reviews.js'; // Up to backend and then into models
import { v4 as uuidv4 } from 'uuid'; // Correct import statement for uuidv4

// Function to generate mock data
function generateMockData(numEntries = 10) {
  const mockData = [];
  for (let i = 0; i < numEntries; i++) {
    mockData.push({
      id: uuidv4(),
      username: `user${i}`,
      title: `Review Title ${i}`,
      body: `This is mock review body number ${i}.`,
      images: [`image${i}.jpg`, `image${i+1}.jpg`]
    });
  }
  return mockData;
}

// Function to insert mock data into the database
// Function to insert mock data into the database
async function insertMockData() {
  try {
    // Enable SQL logging
    sequelize.options.logging = console.log;

    // Synchronize models with the database, creating the table if it does not exist
    await sequelize.sync();

    // Generate mock data
    const mockReviews = generateMockData();
    console.log('Generated Mock Reviews:', mockReviews);

    // Insert mock data and log the result
    const result = await reviews.bulkCreate(mockReviews);
    console.log('Insertion Result:', result.length, 'reviews inserted.');

  } catch (error) {
    console.error('Error inserting mock data:', error);
  } finally {
    // Ensure this is the last thing done before script exits
    try {
      await sequelize.close();
      console.log('Database connection closed.');
    } catch (closeError) {
      console.error('Error closing the database connection:', closeError);
    }
  }
}

// Execute the function
insertMockData();


// Execute the function
insertMockData();

// Execute the function
insertMockData();