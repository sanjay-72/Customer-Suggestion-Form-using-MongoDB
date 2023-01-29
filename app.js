const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 80;
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/Sanjay_travels_Suggestions");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    suggestion: String
});
const CustomerSuggestion = mongoose.model('CustomerSuggestion', customerSchema);


app.post("/", function (req, res) {
    // console.log(req.body);
    var newEntry = new CustomerSuggestion({ name: req.body.Name, email: req.body.email, suggestion: req.body.suggestion });
    newEntry.save();
    res.sendFile(__dirname + '/thankYou.html');
});


app.listen(PORT, function () {
    console.log("App is running on port : " + PORT);
});

