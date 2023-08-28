require('dotenv').config()

//
const methodOverride = require ('method-overeide')
//setup mongoose connection
const mongoose = require('mongoose')


const express = require('express');
const app = express();
const port = 3000;

//connect WITH MONGOOSE
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   // remove : useCreateIndex: true
     
})

mongoose.connection.once('open', ()=> {
    console.log('connected to mongoDB');
});


//setting view engine
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// MIDDLEWARE
app.use((req, res, next) => {
    console.log('I run all routes!')
    next();
})

// This allows the body of a post request
app.use(express.urlencoded({ extended: false }))
// Method Override: Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
app.use(methodOverride('_method'))


//New ROute for fruits
app.get('/new', (req, res)=> {
    res.render('New');
})

//create = POST 
app.post()


app.listen(port, ()=> {
    console.log("listening on http://localhost:3000/ port:", port);
});