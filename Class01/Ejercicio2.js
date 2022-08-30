

// Colaboradores preexistentes
let colab = new Array (
  new Array('Emp01', 'Torneria', 51, 'Secundario Completo'), 
  new Array('Emp02', 'Plomeria', 34, 'Secundario Incompleto'),
  new Array('Emp03', 'Torneria', 54, 'Universitario Incompleto'),
  new Array('Emp04', 'Ingenieria', 42, 'Universitario Completo'),
  new Array('Emp05', 'Consultoria', 32, 'Secundario Completo'),
  new Array('Emp06', 'Ingenieria', 65, 'Universitario Completo'),
  new Array('Emp07', 'Consultoria', 44, 'Secundario Completo'),
  new Array('Emp08', 'Plomeria',67 , 'Secundario Incompleto'),
  new Array('Emp09', 'Torneria', 34, 'Universitario Incompleto'),
  new Array('Emp10', 'Ingenieria', 45, 'Universitario Completo'),
  new Array('Emp11', 'Torneria', 51, 'Secundario Completo'), 
  new Array('Emp12', 'Plomeria', 34, 'Secundario Incompleto'),
  new Array('Emp13', 'Torneria', 54, 'Universitario Incompleto'),
  new Array('Emp14', 'Ingenieria', 42, 'Universitario Completo'),
  new Array('Emp15', 'Docencia', 32, 'Secundario Completo'),
  new Array('Emp16', 'Ingenieria', 65, 'Universitario Completo'),
  new Array('Emp17', 'Docencia', 44, 'Secundario Completo'),
  new Array('Emp18', 'Plomeria',67 , 'Secundario Incompleto'),
  new Array('Emp19', 'Torneria', 34, 'Universitario Incompleto'),
  new Array('Emp20', 'Ingenieria', 45, 'Universitario Completo'),
  new Array('Emp21', 'Torneria', 51, 'Secundario Completo'), 
  new Array('Emp22', 'Plomeria', 34, 'Secundario Incompleto'),
  new Array('Emp23', 'Torneria', 54, 'Universitario Incompleto'),
  new Array('Emp24', 'Plomeria', 42, 'Universitario Completo'),
  new Array('Emp25', 'Docencia', 32, 'Secundario Completo'),
  new Array('Emp26', 'Docencia', 65, 'Universitario Completo'),
  new Array('Emp27', 'Docencia', 44, 'Secundario Completo'),
  new Array('Emp28', 'Plomeria',67 , 'Secundario Incompleto'),
  new Array('Emp29', 'Torneria', 34, 'Universitario Incompleto'),
  new Array('Emp30', 'Consultoria', 45, 'Universitario Completo'),
  new Array('Emp31', 'Torneria', 51, 'Secundario Completo'), 
  new Array('Emp32', 'Plomeria', 34, 'Secundario Incompleto'),
  new Array('Emp33', 'Torneria', 54, 'Universitario Incompleto'),
  new Array('Emp34', 'Consultoria', 42, 'Universitario Completo'),
  new Array('Emp35', 'Docencia', 32, 'Secundario Completo'),
  new Array('Emp36', 'Consultoria', 65, 'Universitario Completo'),
  new Array('Emp37', 'Docencia', 44, 'Secundario Completo')
)



//colaboradores que se agregaran
let personas = new Array (
  new Array('Juan', 'Torneria', 51, 'Secundario Completo'), 
  new Array('Carlos', 'Plomeria', 34, 'Secundario Incompleto'),
  new Array('Alberto', 'Torneria', 54, 'Universitario Incompleto'),
  new Array('Diego', 'Ingenieria', 42, 'Universitario Completo'),
  new Array('Jose', 'Docencia', 32, 'Secundario Completo'),
  new Array('Beltran', 'Ingenieria', 65, 'Universitario Completo'),
  new Array('Martin', 'Docencia', 44, 'Secundario Completo'),
  new Array('Bernardo', 'Plomeria',67 , 'Secundario Incompleto'),
  new Array('Daniel', 'Torneria', 34, 'Universitario Incompleto'),
  new Array('Mario', 'Ingenieria', 45, 'Universitario Completo')
)






//empresas
let companies = new Array (
  new Array('Torneria Sanchez', 'Torneria', 11, new Array()), 
  new Array('Agua y Gas', 'Plomeria', 8, new Array()),
  new Array('Gomez Hnos', 'Ingenieria', 6, new Array()),
  new Array('Juan y Pedro Profes', 'Docencia', 7, new Array()),
  new Array('GAM', 'Consultoria', 5, new Array())
)


//funcion para agregar empleados al final (Método Push)
function addEmpleFin(empleados, empresas) {
  for (let i = 0; i < empresas.length; i++) {
    for (let j = 0; j < empleados.length; j++) {
      if (empresas[i][1] == empleados[j][1]) {
        empresas[i][3].push(empleados[j]);
      } 
    }
  } 
}

addEmpleFin (personas, companies)

//funciones para mostrar los rubros de las empresas
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

function showCon(companies){
  companies.forEach(function(element){
    if (element[1] == 'Consultoria') {
      console.log(element[0] + ' ' + element[1])
}})}


//Funcion para mostrar los Empleados con Secundario completo por empresa
function showECSC (companies){
  companies.forEach(function(element){
    var cantemple = 0;
    var m = 0;

    element[3].forEach(function(emp){
      if (emp[3] == 'Secundario Completo') {
        cantemple++
    }})
    console.log('La empresa '+ element[0] + ' ' + element[1] + ' tiene ' + cantemple + ' empleado(s) con Secundario Completo')
    
  })}

showECSC(companies)