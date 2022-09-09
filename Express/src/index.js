const dotenv = require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const router  = require ('./routes')
const app = express()
//const port = 3000
const fs = require("fs")
const { stringify } = require('querystring')
app.use(express.json());
app.use(express.static("public"));

//const products = require('../src/models/products.json')
const employees = require('../data/empleados.json')
const empre = require('../data/empresas.json')




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('Login')
})


app.get('/persons/id/:id', (req, res) => {  
    res.json({
        name: req.params.name, //'Matias',
        id: req.params.id
    });
});

app.get('/products/price/:precio', (req, res) => {
    const price = req.params.precio;
    const result = products.filter(item => item.price > price);
    res.json(result)
});

//Mostrar todos los productos
app.get('/products', (req, res) =>{
    res.json(products);
});

//Mostrar todos los empleados
app.get('/empleados', (req, res) =>{
  res.json(employees);
});

//mostrar todas las empresas
app.get('/empresas', (req, res) =>{
  res.json(empre);
});

//Filtrar empresas por rubros
app.get('/empresas/:rubros', (req, res) =>{
  const rub = req.params.rubros;
  const result = empre.filter(item => item.rubro == req.params.rubros);
  res.json(result)
});

//Filtro de empleados por edad
app.get('/empleados/edad/:age', (req, res) =>{
  res.json(employees.filter(item => item.edad > req.params.age))
});

//Funcion para generar nuevo array por rubro
function filteredArray(arreglo, rubro) {
  newArray = [],
  arreglo.forEach(function (element) {
    if (element.prof == rubro) {
      newArray.push(element)
    }
  });
  console.log(newArray)

  const isBelowThreshold = (valor) => valor.prof == rubro;
  console.log(newArray.every(isBelowThreshold));

}

// Agrego producto al final del json
app.post('/products/add', (req, res) => {
  const newProd = {
    id:   1003,
    name: "Melitas",
    price: "$180"
  };
  if(!newProd.id){
    res.sendStatus(400)
  }
  
  products.push(newProd);
  fs.writeFile('./data/products.json', JSON.stringify(products), (err) => {
    //if (err) {res.sendError}
  });
  res.json(newProd);

});


//modifico un producto
app.patch('/products/patch/:id', (req, res) => {

  const saveProd = products.filter(item => item.id == req.params.id);
  console.log(saveProd);
  saveProd[0].name = "New Name";
  console.log(saveProd);
 // products.pop();
  //products.push(saveProd);
  //fs.writeFile('./data/products.json', JSON.stringify(products), (err) => {
    //if (err) {res.sendError}
 // });
  res.json(saveProd);

});


/*

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/

app.use(router);
mongoose.connect(process.env.DATABASE_URL)
//mongoose.connect('mongodb+srv://ejecutorHarlan:Conte+29@cluster0.m2gon.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log("🟢 DB Connected");
    app.listen({ port: process.env.PORT }, () => {
    //  app.listen({ port: 3000 }, () => {
      console.log(`🚗 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("🔴 There was an error on the DB connection method.");
    console.log(err);
  });


  