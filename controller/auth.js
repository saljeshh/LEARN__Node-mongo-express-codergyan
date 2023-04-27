const { User } = require("../model/user");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

exports.signUp = (req, res) => {
  const user = new User(req.body);
  const token = jwt.sign(
    { email: req.body.email },
    fs.readFileSync(path.resolve(__dirname, "../private.key"), "utf-8"),
    {
      algorithm: "RS256",
    }
  );

  const hash = bcrypt.hashSync(req.body.password.toString(), 10);

  user.token = token;
  user.password = hash;

  user.save();

  res.status(201).json({ token });
};

exports.login = async (req, res) => {
  try {
    const doc = await User.findOne({ email: req.body.email });
    console.log(doc);
    const isAuth = bcrypt.compare(req.body.password.toString(), doc.password);
    console.log(isAuth);

    if (isAuth) {
      const token = jwt.sign(
        { email: req.body.email },
        fs.readFileSync(path.resolve(__dirname, "../private.key"), "utf-8"),
        {
          algorithm: "RS256",
        }
      );

      doc.token = token;
      doc.save();
      res.status(200).json({ message: "success" });
    }
  } catch (err) {
    res.status(401).json({ message: "haha" });
  }
};
