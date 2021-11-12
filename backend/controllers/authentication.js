const passport = require("passport");
const mongoose = require("mongoose");
const Admin = mongoose.model('admin');

const register = (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: "All fields required" });
  }
  const admin = new Admin();
  admin.name = req.body.name;
  admin.email = req.body.email;
  admin.setPassword(req.body.password);
  admin.save((err) => {
    if (err) {
      res.status(404).json(err);
    } else {
      const token = admin.generateJwt();
      res.status(200).json({ token });
    }
  });
};

const login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "all fields required" });
  }
  passport.authenticate("local", (err, admin, info) => {
    let token;
    if (err) {
      return res.status(400).json(err);
    }
    if (admin) {
      token = admin.generateJwt();
      res.status(200).json({ token });
    } else {
      res.status(401).json(info);
    }
  })(req, res);
};

module.exports = {
  register,
  login,
};
