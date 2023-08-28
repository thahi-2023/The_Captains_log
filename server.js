const express = require('express');
const app = express();
const port = 3000;




//setting view engine
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());


//New ROute for fruits
app.get('/new', (req, res)=> {
    res.render('New');
})

//create = POST 
app.post()


app.listen(port, ()=> {
    console.log("listening on http://localhost:3000/ port:", port);
});