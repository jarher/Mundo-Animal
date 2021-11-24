const express = require("express");
const router = express.Router();
const jwt = require("express-jwt");

const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: "payload",
  algorithms: ["HS256"],
});
const ctrlProducts = require("../controllers/products");
const ctrlAuth = require("../controllers/authentication");

//products

router
  .route("/products")
  .get(ctrlProducts.productsReadAll)
  .post(ctrlProducts.productsCreate);

router
  .route("/products/:productid")
  .get(ctrlProducts.productsReadOne)
  .put(ctrlProducts.productUpdateOne)
  .delete(ctrlProducts.productsDeleteOne);

//admin

router.post("/register", ctrlAuth.register);
router.post("/login", ctrlAuth.login);

module.exports = router;
