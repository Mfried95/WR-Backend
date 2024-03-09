import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbName = process.env.DB_NAME 
const dbUser = process.env.DB_USER 
const dbPassword = process.env.DB_PASSWORD 
const dbHost = process.env.DB_HOST 
const dbPort = process.env.DB_PORT 

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'postgres',
    port: dbPort,
    logging: console.log  // Suppress SQL log output
});

export default sequelize;