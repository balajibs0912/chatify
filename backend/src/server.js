import express from 'express'
import dotenv, { config } from 'dotenv'
import authRoute from '../src/routers/auth.routes.js'
import messageRoute from '../src/routers/message.routes.js'


dotenv.config();



const app = express();
const PORT = process.env.PORT;

app.use("/api/auth",authRoute)
app.use("/api/message",messageRoute)

app.listen(PORT, ()=> console.log("Server is running on port: "+PORT))

