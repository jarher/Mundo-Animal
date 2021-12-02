const express = require("express");
const router = express.Router();
const jwt = require("express-jwt");
const Storage = require("../config/multer");
const multer = require("multer");

const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: "payload",
  algorithms: ["HS256"],
});
const ctrlProducts = require("../controllers/products");
const ctrlAuth = require("../controllers/authentication");

//products
const uploader = multer({Storage});

uploader.single("file");

router
  .route("/products")
  .get(ctrlProducts.productsReadAll)
  .post(ctrlProducts.productsCreate, uploader.single('file'));

router
  .route("/products/:productid")
  .get(ctrlProducts.productsReadOne)
  .put(ctrlProducts.productUpdateOne)
  .delete(ctrlProducts.productsDeleteOne);

//admin

router.post("/register", ctrlAuth.register);
router.post("/login", ctrlAuth.login);

module.exports = router;
