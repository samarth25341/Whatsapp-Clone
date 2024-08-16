import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD; 

const storage = new GridFsStorage({
    url: `mongodb://${USERNAME}:${PASSWORD}@ac-psbbb7k-shard-00-00.r2hlz4e.mongodb.net:27017,ac-psbbb7k-shard-00-01.r2hlz4e.mongodb.net:27017,ac-psbbb7k-shard-00-02.r2hlz4e.mongodb.net:27017/?ssl=true&replicaSet=atlas-14k4o4-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useUnifiedTopology:true,useNewUrlParser: true },
   file: (request, file) => {
    console.log("File Mimetype:", file.mimetype);

    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.mimetype) === -1) {
        return `${Date.now()}-file-${file.originalname}`;
    }

    return {
        bucketName: "photos",
        filename: `${Date.now()}-file-${file.originalname}`
    };
}

});

export default multer({storage}); 