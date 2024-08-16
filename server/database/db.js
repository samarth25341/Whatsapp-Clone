import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const Connection = async (username, password) => {
    // const db = client.db('yourDatabaseName');
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-psbbb7k-shard-00-00.r2hlz4e.mongodb.net:27017,ac-psbbb7k-shard-00-01.r2hlz4e.mongodb.net:27017,ac-psbbb7k-shard-00-02.r2hlz4e.mongodb.net:27017/?ssl=true&replicaSet=atlas-14k4o4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    // const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-psbbb7k-shard-00-00.r2hlz4e.mongodb.net:27017,ac-psbbb7k-shard-00-01.r2hlz4e.mongodb.net:27017,ac-psbbb7k-shard-00-02.r2hlz4e.mongodb.net:27017/?ssl=true&replicaSet=atlas-14k4o4-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error while connecting databse ', error.message);
    }

};

export default Connection;