import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.js'
import bodyParser from 'express'
import recipeRouter from './routes/recipe.js'
import cors from "cors"
const app = express();

const port = 3000

app.use(bodyParser.json())
app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

app.use('/api',userRouter)

//Recipe Router
app.use('/api',recipeRouter)



mongoose.connect("mongodb+srv://henilp1508:dLw8t5sOCKf3wH4A@cluster0.45coh.mongodb.net/",{   
    dbName:"Recipe-app"
}).then(()=>console.log("MongoDB is Connected")).catch((err)=>{console.log(err.message);
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
