const express = require('express')
const products = require('./data/products.json')
const employees = require('./data/empleados.json')
const empre = require('./data/empresas.json')
const app = express()
const port = 3000

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





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})