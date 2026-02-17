const express = require("express");
const router = express.Router();
router.get("/", (req, res) =>
{
    res.send("GET /users");
});
router.get("/:id", (req, res) =>
{
res.send("GET /users/" + req.params.id);
});
router.get("/:id/:name", (req, res) =>
{
    res.send("GET /users/" + req.params.id + "/" + req.params.name);
});
router.post("/", (req,res) =>
{
    console.log("POST-data:", req.body);
    res.send("POST vastaanotettu");
});
module.exports = router;