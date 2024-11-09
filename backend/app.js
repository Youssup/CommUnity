require('dotenv').config()

const express = require("express")
const path = require("path")
const app = express()
app.use(express.json());

app.use(express.static('client/dist'))

//CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

const communityRoutes = require("./routes/communityRoutes.js")
app.use("/api/community", communityRoutes)

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});


const PORT = 3000 || process.env.PORT
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))