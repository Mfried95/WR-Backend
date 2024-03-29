// models/reviews.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // Adjust the import path as needed

const reviews = sequelize.define('reviews', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true        
  }
}, {
  timestamps: true,
  freezeTableName: true
});

export default reviews;