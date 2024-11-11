require('dotenv').config()
const express = require("express")
const path = require("path")
const mongoose = require('mongoose');
const app = express()
app.use(express.json());

//CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

const communityRoutes = require("./routes/communityRoutes.js")
const reviewRoutes = require("./routes/reviewRoutes.js")
app.use("/api/community", communityRoutes)
app.use("/api/review", communityRoutes)
app.use(express.static('client/dist'))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

PASSWORD = process.env.PASSWORD
USERNAME = process.env.USERNAME
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.bg1ej.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))