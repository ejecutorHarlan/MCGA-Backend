// Colaboradores preexistentes
const colab = [
  {"nombre": "Emp01", "prof": "Torneria", "edad": 51, "instru": "Secundario Completo"}, 
  {"nombre": "Emp02", "prof": "Plomeria", "edad": 34, "instru": "Secundario Incompleto"},
  {"nombre": "Emp03", "prof": "Torneria", "edad": 54, "instru": "Universitario Incompleto"},
  {"nombre": "Emp04", "prof": "Ingenieria", "edad": 42, "instru": "Universitario Completo"},
  {"nombre": "Emp05", "prof": "Consultoria", "edad": 32, "instru": "Secundario Completo"},
  {"nombre": "Emp06", "prof": "Ingenieria", "edad": 65, "instru": "Universitario Completo"},
  {"nombre": "Emp07", "prof": "Consultoria", "edad": 44, "instru": "Secundario Completo"},
  {"nombre": "Emp08", "prof": "Plomeria", "edad":67 , "instru": "Secundario Incompleto"},
  {"nombre": "Emp09", "prof": "Torneria", "edad": 34, "instru": "Universitario Incompleto"},
  {"nombre": "Emp10", "prof": "Ingenieria", "edad": 45, "instru": "Universitario Completo"},
  {"nombre": "Emp11", "prof": "Torneria", "edad": 51, "instru": "Secundario Completo"}, 
  {"nombre": "Emp12", "prof": "Plomeria", "edad": 34, "instru": "Secundario Incompleto"},
  {"nombre": "Emp13", "prof": "Torneria", "edad": 54, "instru": "Universitario Incompleto"},
  {"nombre": "Emp14", "prof": "Ingenieria", "edad": 42, "instru": "Universitario Completo"},
  {"nombre": "Emp15", "prof": "Docencia", "edad": 32, "instru": "Secundario Completo"},
  {"nombre": "Emp16", "prof": "Ingenieria", "edad": 65, "instru": "Universitario Completo"},
  {"nombre": "Emp17", "prof": "Docencia", "edad": 44, "instru": "Secundario Completo"},
  {"nombre": "Emp18", "prof": "Plomeria", "edad":67 , "instru": "Secundario Incompleto"},
  {"nombre": "Emp19", "prof": "Torneria", "edad": 34, "instru": "Universitario Incompleto"},
  {"nombre": "Emp20", "prof": "Ingenieria", "edad": 45, "instru": "Universitario Completo"},
  {"nombre": "Emp21", "prof": "Torneria", "edad": 51, "instru": "Secundario Completo"}, 
  {"nombre": "Emp22", "prof": "Plomeria", "edad": 34, "instru": "Secundario Incompleto"},
  {"nombre": "Emp23", "prof": "Torneria", "edad": 54, "instru": "Universitario Incompleto"},
  {"nombre": "Emp24", "prof": "Plomeria", "edad": 42, "instru": "Universitario Completo"},
  {"nombre": "Emp25", "prof": "Docencia", "edad": 32, "instru": "Secundario Completo"},
  {"nombre": "Emp26", "prof": "Docencia", "edad": 65, "instru": "Universitario Completo"},
  {"nombre": "Emp27", "prof": "Docencia", "edad": 44, "instru": "Secundario Completo"},
  {"nombre": "Emp28", "prof": "Plomeria", "edad":67 , "instru": "Secundario Incompleto"},
  {"nombre": "Emp29", "prof": "Torneria", "edad": 34, "instru": "Universitario Incompleto"},
  {"nombre": "Emp30", "prof": "Consultoria", "edad": 45, "instru": "Universitario Completo"},
  {"nombre": "Emp31", "prof": "Torneria", "edad": 51, "instru": "Secundario Completo"}, 
  {"nombre": "Emp32", "prof": "Plomeria", "edad": 34, "instru": "Secundario Incompleto"},
  {"nombre": "Emp33", "prof": "Torneria", "edad": 54, "instru": "Universitario Incompleto"},
  {"nombre": "Emp34", "prof": "Consultoria", "edad": 42, "instru": "Universitario Completo"},
  {"nombre": "Emp35", "prof": "Docencia", "edad": 32, "instru": "Secundario Completo"},
  {"nombre": "Emp36", "prof": "Consultoria", "edad": 65, "instru": "Universitario Completo"},
  {"nombre": "Emp37", "prof": "Docencia", "edad": 44, "instru": "Secundario Completo"}
];

//colaboradores que se agregaran
const personas = [
  {"nombre": "Juan", "prof": "Torneria", "edad":  51, "instru": "Secundario Completo"}, 
  {"nombre": "Carlos", "prof": "Plomeria", "edad":  34, "instru": "Secundario Incompleto"},
  {"nombre": "Alberto", "prof": "Torneria", "edad":  54, "instru": "Universitario Incompleto"},
  {"nombre": "Diego", "prof": "Consultoria", "edad":  42, "instru": "Universitario Completo"},
  {"nombre": "Jose", "prof": "Docencia", "edad":  32, "instru": "Secundario Completo"},
  {"nombre": "Beltran", "prof": "Ingenieria", "edad":  65, "instru": "Universitario Completo"},
  {"nombre": "Martin", "prof": "Docencia", "edad":  44, "instru": "Secundario Completo"},
  {"nombre": "Bernardo", "prof": "Plomeria", "edad": 67 , "instru": "Secundario Incompleto"},
  {"nombre": "Daniel", "prof": "Torneria", "edad":  34, "instru": "Universitario Incompleto"},
  {"nombre": "Mario", "prof": "Ingenieria", "edad":  45, "instru": "Universitario Completo"}
];

//empresas
const companies = [
  {"rSoc": "Torneria Sanchez", "rubro": "Torneria", "cantEmple":  11, "empleados": []}, 
  {"rSoc": "Agua y Gas", "rubro": "Plomeria", "cantEmple":  8, "empleados": []},
  {"rSoc": "Gomez Hnos", "rubro": "Ingenieria", "cantEmple":  6, "empleados": []},
  {"rSoc": "Juan y Pedro profes", "rubro": "Docencia", "cantEmple":  7, "empleados": []},
  {"rSoc": "GAM", "rubro": "Consultoria", "cantEmple":  5, "empleados": []}
];

//funcion para agregar empleados al final (Método Push)
function addEmployee(empleados, empresas){
  empresas.forEach(function(empresa){
    empleados.forEach(function(empleado){
      if (empresa.rubro == empleado.prof){
        empresa.empleados.push(empleado)
        console.log(empresa.empleados)
      }
    })
  })
};

addEmployee(colab, companies)

//funciones para mostrar los rubros de las empresas
function showIng(companies) {
  companies.forEach(function (element) {
    if (element.rubro == 'Ingenieria') {
      console.log(element.rSoc + ' ' + element.rubro);
    }
  })
}

function showDoc(companies){
  companies.forEach(function(element){
    if (element.rubro == 'Docencia') {
      console.log(element.rSoc + ' ' + element.rubro)
    }
  })
}

function showPlo(companies){
  companies.forEach(function(element){
    if (element.rubro == 'Plomeria') {
      console.log(element.rSoc + ' ' + element.rubro)
    }
  })
}

function showTor(companies){
  companies.forEach(function(element){
    if (element.rubro == 'Torneria') {
      console.log(element.rSoc + ' ' + element.rubro)
    }
  })
}

function showCon(companies){
  companies.forEach(function(element){
    if (element.rubro == 'Consultoria') {
      console.log(element.rSoc + ' ' + element.rubro)
    }
  })
}


//Funcion para mostrar los Empleados con Secundario completo por empresa
function showECSC (companies){
  companies.forEach(function(element){
    var cantemple = 0;
    var m = 0;

    element.empleados.forEach(function(emp){
      if (emp.instru == 'Secundario Completo') {
        cantemple++
      }
    }),
    console.log('La empresa '+ element.rSoc + ' ' + element.rubro + ' tiene ' + cantemple + ' empleado(s) con Secundario Completo')
  })
}

// showECSC(companies)