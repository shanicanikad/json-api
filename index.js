const express = require("express");
const app = express();
const Naruto = require("./models/Naruto");
const parser = require("body-parser");
const cors = require("cors");


app.use(parser.json());
app.use(cors());


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

app.delete("/Naruto/:score", (req,res)=> {
    Naruto.findOneAndDelete({score: req.params.score}, req.body)
    .then(Naruto => {
      res.json(Naruto)
    })
})

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });
