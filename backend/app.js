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
app.use("/api/community", communityRoutes)
app.use(express.static('client/dist'))
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});




PASSWORD = process.env.PASSWORD
USERNAME = process.env.USERNAME
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.bg1ej.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
