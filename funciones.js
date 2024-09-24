// Se declaran las variables en cero para su posteriormente acumular la suma de cada materia y la ultma variable para saber cuantas columnas o alumnos se van agregando y asi poder sacar el promedio final dependiendo de cuantos alumnos o columnas sean
let sumaMatematicas = 0;
let sumaEspanol = 0;
let sumaArtes = 0;
let totalAlumnos = 0;
// Se crea la funcion que obtendra todos los valores de cada caja ademas de calcular el promedio y actualizar los promedios generales cada que se ingresen nuevos valores, dicha funcion es la del boton Agregar
function calcularP() {
    // Aqui se obtienen los valores ingresados por el usuario ademas de una restriccion en el nombre para no ingresar valores que no sean letras
    const nombre = document.getElementById('nA').value;
    if (!/^[A-Za-z\s]+$/.test(nombre)) {
        alert("El nombre solo debe contener letras y espacios.");
        return;
    }
    const calMatematicas = parseFloat(document.getElementById('v1').value);
    const calEspanol = parseFloat(document.getElementById('v2').value);
    const calArtes = parseFloat(document.getElementById('v3').value);

    // Aqui se valida que se hayan llenado todos los campos y que estén dentro del rango preestablecido entre 0 a 100, si el usuario hace caso omiso, se le alertara de lo que esta haciendo mal
    if (!nombre || isNaN(calMatematicas) || isNaN(calEspanol) || isNaN(calArtes)) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }
    if (calMatematicas < 0 || calMatematicas > 100 || 
        calEspanol < 0 || calEspanol > 100 || 
        calArtes < 0 || calArtes > 100) {
        alert("Las calificaciones deben estar entre 0 y 100.");
        return;
    }

    // Aqui se calcula el promedio del alumno sumando su calificacion por materia para posteriormente dividirla entre las 3 materias
    const promedio = (calMatematicas + calEspanol + calArtes) / 3;

    // Aqui se manda llamar la tabla de materias para posteriormente poder insertar una nueva fila con sus respectivas celdas
    const tablaMaterias = document.getElementById('materias');

    // Aqui se crear una nueva fila y celdas y se agrega a la tabla materias
    const nuevaFila = tablaMaterias.insertRow();
    const celdaNombre = nuevaFila.insertCell(0);
    const celdaMatematicas = nuevaFila.insertCell(1);
    const celdaEspanol = nuevaFila.insertCell(2);
    const celdaArtes = nuevaFila.insertCell(3);
    const celdaPromedio = nuevaFila.insertCell(4);

    // Aqui una vez se extrajeron los valores de cada materia que ingreso el usuario se mandan llamar y se le asignan los valores a las celdas
    celdaNombre.textContent = nombre;
    celdaMatematicas.textContent = calMatematicas;
    celdaEspanol.textContent = calEspanol;
    celdaArtes.textContent = calArtes;
    celdaPromedio.textContent = promedio.toFixed(2);

    // Aqui dependiendo el promedio que saque el usuario/alumno cambia el color de la fila teniendo como regla que del o al 69 es rojo, del 70 al 89 amarillo y si el proedio es de 90 o mayor se mantendra el color de fondo que es verde
    if (promedio < 70) {
        nuevaFila.style.backgroundColor = 'red';
    } else if (promedio >= 70 && promedio < 90) {
        nuevaFila.style.backgroundColor = 'yellow';
    } else {
        nuevaFila.style.backgroundColor = ''; 
    }

    // Aqui detecta cada que se ingresa una nueva fila/ alumno y actualiza las sumas y el conteo
    sumaMatematicas += calMatematicas;
    sumaEspanol += calEspanol;
    sumaArtes += calArtes;
    totalAlumnos++;

    // Aqui una vez se tienen todos los calculos se suman las calificaciones de cada alumno para dar el promedio general de cada materia y al final calculando todos los promedios se realiza el calculo del promedio final general
    const promMatematicas = sumaMatematicas / totalAlumnos;
    const promEspanol = sumaEspanol / totalAlumnos;
    const promArtes = sumaArtes / totalAlumnos;
    const promFinal = (promMatematicas + promEspanol + promArtes) / 3;

    // Aqui se actualizan los spans de promedios, dichos spans son los idprom que declare en el html para que aparezcan en la parte de promedios generales, de esta forma se mandan llamar y el tofixed(1) sirve para que solo se refleje 1 decimal
    document.getElementById('promMatematicas').textContent = promMatematicas.toFixed(1);
    document.getElementById('promEspanol').textContent = promEspanol.toFixed(1);
    document.getElementById('promArtes').textContent = promArtes.toFixed(1);
    document.getElementById('promFinal').textContent = promFinal.toFixed(1);    
}
 // Por ultimo aqui se crea la funcion de Limpiar los campos que rellena el usuario, dicha funcion es la del boton Limpiar
function limpiar(){
    document.getElementById('nA').value = '';
    document.getElementById('v1').value = '';
    document.getElementById('v2').value = '';
    document.getElementById('v3').value = '';
}