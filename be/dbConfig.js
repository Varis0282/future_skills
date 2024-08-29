import pkg from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { connect, connection } = pkg;

connect(process.env.mongo_url);

const db = connection;

db.on('connected', () => {
    console.log("Connected to the database");
})

db.on('error', (error) => {
    console.log("Error connecting to the database : " + error);
});

export default db;