import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(4000, () => {
    console.log(`app is listening to port 4000`)
})