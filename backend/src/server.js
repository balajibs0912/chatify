import express from 'express'
import dotenv, { config } from 'dotenv'
import authRoute from '../src/routers/auth.routes.js'
import messageRoute from '../src/routers/message.routes.js'
import path from 'path'


dotenv.config();



const app = express();
const __dirname = path.resolve()
const PORT = process.env.PORT || 3000;

app.use("/api/auth",authRoute)
app.use("/api/message",messageRoute)

//make ready for deployment

if(process.env.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    })
}

app.listen(PORT, ()=> console.log("Server is running on port: "+PORT))

