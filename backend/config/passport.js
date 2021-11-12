const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const Admin = mongoose.model("admin");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    (username, password, done) => {
      Admin.findOne({ email: username }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {
            message: "Incorrect adminname.",
          });
        }
        if (!user.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password",
          });
        }
        return done(null, user);
      });
    }
  )
);
