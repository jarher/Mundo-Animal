const mongoose = require('mongoose');

const Image = new mongoose.Schema({
  urlFile:{type:String},
  dateUpload:{type:Date, default:Date.now()}
})

const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    require: true,
  },
  categoria:{
    type:String,
    require:true
  },
  precio: {
    type: Number,
    require: true,
  },
  descripcion: {
    type: String,
    require: true,
  },
  imagenUrl:Image
});



mongoose.model('product', productSchema);