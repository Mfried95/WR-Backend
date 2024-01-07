import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbName = process.env.DB_NAME || 'default_db_name';
const dbUser = process.env.DB_USER || 'default_user';
const dbPassword = process.env.DB_PASSWORD || 'default_password';
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || 5432;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'postgres',
    port: dbPort,
    logging: false  // Suppress SQL log output
});

export default sequelize;