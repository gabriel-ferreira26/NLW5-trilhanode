import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message : "ola mundo",
    });
});

app.post("/", (request, response) => {
    return response.json({
        message : "Usuario salvo com sucesso",
    })
})

app.listen(3333, () => console.log("server is running on port 3333"));