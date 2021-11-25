const mongoose = require('mongoose');
const Prod = mongoose.model('product');

const productsReadAll = async (req, res) => {
  Prod.find().exec((err, products) => {
    if (!products) {
      return res.status(404).json({ message: "products not found" });
    } else if (err) {
      return res.status(404).json(err);
    } else {
      return res.status(200).json(products);
    }
  });
};

const productsCreate = (req, res) => {
  Prod.create(
    {
      nombre: req.body.name,
      categoria: req.body.category,
      precio: req.body.price,
      descripcion: req.body.description,
      imagenUrl: req.body.imgUrl, 
    },

    (err, product) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(201).json(product);
      }
    }
  );
};

const productsReadOne = (req, res) => {
    Prod
      .findById(req.params.productid)
      .exec((err, product) => {
        if (!product) {
          return res
            .status(404)
            .json({"message": "product not found"});
        } else if (err) {
          return res
            .status(404)
            .json(err);
        } else {
          return res
            .status(200)
            .json(product);
        }
      });
};

const productUpdateOne = (req, res) => {
  if (!req.params.productid) {
    return res
      .status(404)
      .json({
        "message": "Not found, productid is required"
      });
  }
  Prod
    .findById(req.params.productid)
    .select('-reviews -rating')
    .exec((err, product) => {
      if (!product) {
        return res
          .status(404)
          .json({
            "message": "productid not found"
          });
      } else if (err) {
        return res
          .status(400)
          .json(err);
      }
      product.nombre = req.body.name,
      product.categoria = req.body.category,
      product.precio = req.body.price,
      product.descripcion = req.body.description,
      product.imagenUrl = req.body.imgUrl,

      product.save((err, prod) => {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(prod);
        }
      });
    }
  );
};

const productsDeleteOne = (req, res) => {
  const {productid} = req.params;
  if (productid) {
    Prod
      .findByIdAndRemove(productid)
      .exec((err, product) => {
          if (err) {
            return res
              .status(404)
              .json(err);
          }
          res
            .status(204)
            .json(null);
        }
    );
  } else {
    res
      .status(404)
      .json({
        "message": "No product"
      });
  }
};

module.exports = {
  productsReadAll,
  productsCreate,
  productsReadOne,
  productUpdateOne,
  productsDeleteOne
};
