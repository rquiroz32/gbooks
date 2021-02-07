const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes =require('./routes')
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({extended:true}));
app.use(express.json());


//Serve up static assets
if(process.env.NODE_ENV==="production"){
    app.use(express.static('client/build'));    
}
//Add routes
app.use(routes)

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gbooks");

// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});



