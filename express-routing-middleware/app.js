const express = require("express");
const app = express();
const usersRouter = require("./routes/users");
app.use(express.json());
app.use((req,res,next) =>
{
    console.log("Middleware toimii:", req.method, req.url);
    next();
});
app.use("/users", usersRouter);
app.listen(3000, () =>
{
    console.log("Serveri käynnissä http://localhost:3000/");
});
