const { Router } = require("express");
const { db } = require("./db");
const router = new Router();

router.post("/", async (req, res) => {
  const credential = req.body;

  res.send(credential);
});
module.exports = router;
