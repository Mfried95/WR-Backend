import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // Adjust the import path as needed

const rev = sequelize.define('rev', {
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

export default rev;