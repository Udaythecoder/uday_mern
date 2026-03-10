const express=require('express');
const connectDB=require('./config/db');
const dotenv =require('dotenv')
const { connect } = require('mongoose');

const app=express();
const egRouters=require('./routers/egRouter')
const userRouters=require('./routers/userRouter')
const todoRouters =require('./routers/todoRouters')
const cors=require('cors')
dotenv.config();
connectDB();
app.use(express.json());
app.use(egRouters);
app.use('/api/user',userRouters);
app.use('/api/todo',todoRouters);
app.use(cors())

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`
)});
