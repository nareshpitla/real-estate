import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./routes/user_route.js"

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => { console.log(err); });
const app = express();

app.listen(3000, () => { 
    
  console.log('Server running on port 3000');
}
);

app.get('/', (req, res) => {
  res.status(200).send("Hello World")
})

app.use('/api', userRouter)