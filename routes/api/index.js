const router = require("express").Router();
const bookRoutes = require("./gbooks");
const dotenv = require('dotenv');
const fetch = require("node-fetch");

//require("dotenv").config();
dotenv.config();
const API_KEY = process.env.API_KEY;

// Book routes
router.use("/books", bookRoutes);



router.get("/search/:book", (req,res)=>{
    let searchTerm = req.params.book
    let apiURL = "https://www.googleapis.com/books/v1/volumes?q=";
    apiURL += searchTerm;
    apiURL += "&printType=books&key="
    apiURL += API_KEY;

    fetch(apiURL).then(function (result) {
        return result.json();
    }).then(function (response) {
        res.json(response);
    });

})

module.exports = router;
