const express = require("express")

let app = express()


app.get("/",(req,res)=>{

    res.send("i am running")

})

app.listen(3000, () => {

    console.log("server running")

})

