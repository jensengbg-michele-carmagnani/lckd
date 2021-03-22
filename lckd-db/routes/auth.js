const { Router } = require("express");
const { db } = require("./db");
const router = new Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const credential = req.body;

  res.send(credential);
});
router.post("/login", async (req, res) => {
  // Does user exist??
  let user = db.get("user").find({ username: req.body.username }).value();

  console.log("user existing", user);

  // If exist
  if (user) {
    // Check PWD & compare it with the one in the db
    const valid = await bcrypt.compare(req.body.password, user.password);

    //If valid PWD
    if (valid) {
      //Decrypt  userkey
      const bytes = CryptoJS.AES.decrypt(user.userkey, process.env.SECRET);
      const DECRYPTED_USER_KEY = bytes.toString(CryptoJS.enc.Utf8);
      console.log("decrypted user key ", DECRYPTED_USER_KEY);

      // JWT sign with e variable JWT_KEY
      const token = jwt.sign({ uuid: user.uuid }, process.env.JWT_KEY);
      console.log('DECRYPTED_USER',DECRYPTED_USER_KEY)
      // return JWT + KEY to frontend
      res.status(201).send({
        token: token,
        userkey: DECRYPTED_USER_KEY,
      });
    } else {
      res.status(403).send("Not data for you!");
    }
  } else {
    res.status(400).send("User or password not found!!");
  }
});
module.exports = router;
