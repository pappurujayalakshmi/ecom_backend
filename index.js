let mongoose = require("mongoose")
let express = require("express")
let cors = require("cors")
require("dotenv").config()

const rt = require("./routes/rt")

// MongoDB Atlas connection
mongoose.connect(process.env.MONGO_URI)
.then(()=> {
    console.log("MongoDB Connected")
})
.catch(err => console.log(err))

let app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/pimgs", express.static("./prodimgs"))
app.use("/", rt)

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server running")
})