const mongoose = require('mongoose');
const {appConfig} = require('../config')

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
  imagenUrl:{
    type:String,
    require:true
  }
});

productSchema.methods.setImgUrl = function setImgUrl (filename){
  const {host,port} = appConfig
  this.imagenUrl = `${host}:${port}/public/${filename}`
}

mongoose.model('product', productSchema);