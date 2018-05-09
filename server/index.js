let express = require("express");
let bodyParser = require("body-parser");
let ClientRoutes = require("../routes/ClientRoutes");
let LocationRoutes = require("../routes/LocationRoutes");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(ClientRoutes);
app.use(LocationRoutes);


const port = process.env.PORT || 3001;
app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
});


