// const emple0 = new Array ('Juan', 'Tornero', 51, 'Secundario Completo');
// const emple1 = new Array ('Carlos', 'Plomero', 34, 'Secundario Incompleto');
// const emple2 = new Array ('Alberto', 'Ingeniero', 42, 'Universitario Completo');
// const emple3 = new Array ('Jose', 'Docente', 32, 'Universitario Incompleto');
// const emple4 = new Array ('Beltran', 'Ingeniero', 65, 'Universitario Completo');
// const emple5 = new Array ('Martin', 'Docente', 44, 'Secundario Completo');
// const emple6 = new Array ('Bernardo', 'Plomero',67 , 'Secundario Incompleto');
// const emple7 = new Array ('Daniel', 'Tornero', 34, 'Universitario Incompleto');
// const emple8 = new Array ('Mario', 'Ingeniero', 45, 'Universitario Completo');
// const emple9 = new Array ('Juan', 'Tornero', 51, 'Secundario Completo');



// const Emp1 = new Array('Torneria Sanchez', 'Torneria', 11, new Array());
// const Emp2 = new Array('Agua y Gas', 'Plomeria', 8, new Array());
// const Emp3 = new Array('Gomez Hnos', 'Ingenieria', 6, new Array());
// const Emp4 = new Array('Juan y Pedro Profes', 'Docencia', 7, new Array())



// function addEmpleFin(empleado, empresa) {
//   empresa[3].push(empleado);
// }

// function addEmpleInicio(empleado, empresa) {
//   empresa[3].unshift(empleado); 
// }









let personas = new Array (
  new Array('Juan', 'Torneria', 51, 'Secundario Completo'), 
  new Array('Carlos', 'Plomeria', 34, 'Secundario Incompleto'),
  new Array('Alberto', 'Torneria', 54, 'Universitario Incompleto'),
  new Array('Diego', 'Ingenieria', 42, 'Universitario Completo'),
  new Array('Jose', 'Docencia', 32, 'Universitario Incompleto'),
  new Array('Beltran', 'Ingenieria', 65, 'Universitario Completo'),
  new Array('Martin', 'Docencia', 44, 'Secundario Completo'),
  new Array('Bernardo', 'Plomeria',67 , 'Secundario Incompleto'),
  new Array('Daniel', 'Torneria', 34, 'Universitario Incompleto'),
  new Array('Mario', 'Ingenieria', 45, 'Universitario Completo')
  )

let companies = new Array (
  new Array('Torneria Sanchez', 'Torneria', 11, new Array()), 
  new Array('Agua y Gas', 'Plomeria', 8, new Array()),
  new Array('Gomez Hnos', 'Ingenieria', 6, new Array()),
  new Array('Juan y Pedro Profes', 'Docencia', 7, new Array())
)


function addEmpleFin(empleados, empresas) {
  for (let i = 0; i < companies.length; i++) {
    for (let j = 0; j < personas.length; j++) {
      if (empresas[i][1] == empleados[j][1]) {
        empresas[i][3].push(empleados[j]);
      } 
    }
  } 
}


function showIng(companies){
  companies.forEach(function(element){
    if (element[1] == 'Ingenieria') {
      console.log(element[0] + ' ' + element[1])
}})}

function showDoc(companies){
  companies.forEach(function(element){
    if (element[1] == 'Docencia') {
      console.log(element[0] + ' ' + element[1])
}})}

function showPlo(companies){
  companies.forEach(function(element){
    if (element[1] == 'Plomeria') {
      console.log(element[0] + ' ' + element[1])
}})}

function showTor(companies){
  companies.forEach(function(element){
    if (element[1] == 'Torneria') {
      console.log(element[0] + ' ' + element[1])
}})}



function showECSC (companies){
  companies.forEach(function(element){
    var cantemple = 0;
    var m = 0;

    element[3].forEach(function(emp){
      if (emp[3] == 'Secundario Completo') {
        console.log(cantemple);
        cantemple++;
    }},
    console.log('La empresa'+ element[0] + ' ' + element[1] + ' tiene ' + cantemple + ' empleados con Secundario Completo'),
    )
  })
}