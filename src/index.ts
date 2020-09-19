import express from "express";

const app = express();

app.get("/", async(req, res) => {
    return res.send("Hello Word, with Typescript!")
});

app.listen(3333);
