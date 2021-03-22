const { Router } = require("express");
const { db } = require("./db");
const router = new Router();
const bcrypt = require("bcrypt");

const CryptoJS = require("crypto-js");

const shortid = require("shortid");

const serverStatus = "https://http.cat/";
 
router.post("/", async (req, res) => {
  // const credential = req.body;

  if (req.body.username && req.body.password) {
    
    // hash pwd with bcrypt
    const ENCRYPTED_PW = await bcrypt.hash(req.body.password, 10);

    //generate userkey
    const USER_KEY = shortid.generate();

    // encrypt USER_KEY & SECRET with CryptoJS
    const ENCRYPTED_USER_KEY = CryptoJS.AES.encrypt(
      USER_KEY, // "Messsagge"  generate by shortid.generate()
      process.env.SECRET // "Secret Passphrase" environment variable 
    ).toString();
   

    let user = {
      uuid: shortid.generate(),
      username: req.body.username,
      password: ENCRYPTED_PW, // hashed with bycrypt module
      userkey: ENCRYPTED_USER_KEY, // encrypted with with CryptoJS & the {obj} contain the USER_KEY(generate by shortid module) + env SECRET
    };

    // Add user to db 'user'
    db.get("user").push(user).write();
    //send back the a message to user
    res.status(201).send(`User added ${serverStatus}201`);
  } else {
    res
      .status(400).send(`${serverStatus}400`)
      .send("Whoops! did you really entered the right credetials??");
  }
});
module.exports = router;
