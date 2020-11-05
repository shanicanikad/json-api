const express = require("express");
const app = express();
const Naruto = require("./models/Naruto");
const parser = require("body-parser");

app.use(parser.json());


app.get("/", (req, res)=> {
    res.redirect("/Naruto")
})

app.get("/Naruto", (req, res) => {
    Naruto.find({}).then(Naruto => {
        res.json(Naruto);
    })
})

app.get("/Naruto/:id", (req, res)=> {
    Naruto.findById(req.params.id).then(Naruto => {
        res.json(Naruto)
    })

})

app.post("/Naruto", (req, res)=> {
    Naruto.create(req.body).then(Naruto => {
        res.json(Naruto)
    })
})

app.put("/Naruto/score/:score", (req,res)=> {
    Naruto.findOneAndUpdate({score: req.params.score}, req.body)
    .then(Naruto => {
      res.json(Naruto)
    })
})

// app.delete("/Naruto")
app.listen(4000, () => {
    console.log("Your app serve is listen on a port that's over 4000!");
})