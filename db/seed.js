const Naruto = require("../models/Naruto");
const NarutoData = require("../db/naruto.json")


console.log(NarutoData)
Naruto.deleteMany({}).then(()=> {
    Naruto.create(NarutoData.results).then(()=>{
        Naruto.find({})
        .then((res) => 
            console.log(res))
        })
        .catch((err)=>{
            console.log(err)
        })
})