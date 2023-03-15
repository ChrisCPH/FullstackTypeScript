import express = require("express");
import morgan = require("morgan");

const app = express();
//console.log(process.env)

if(process.env.NODE_ENV === "development") {
    app.use(morgan('dev'))
    console.log("Development mode")
}
//npm run start:dev

app.get("/",(req, res) => {
    res.status(200)
        .json({
            status: "success",
            message: "Hello World"
        })
})


app.get("/hello/:name", (req, res) => {
    res.status(200)
        .json({
            name: ":name"
        })
})

app.listen(3000, () => {
    console.log("Server is listening to http://localhost:3000")
})