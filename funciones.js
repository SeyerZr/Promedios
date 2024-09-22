let sumaMatematicas = 0;
let sumaEspanol = 0;
let sumaArtes = 0;
let totalAlumnos = 0;

function calcularP() {
    // Obtener los valores de los campos de entrada
    const nombre = document.getElementById('nA').value;
    if (!/^[A-Za-z\s]+$/.test(nombre)) {
        alert("El nombre solo debe contener letras y espacios.");
        return;
    }
    const calMatematicas = parseFloat(document.getElementById('v1').value);
    const calEspanol = parseFloat(document.getElementById('v2').value);
    const calArtes = parseFloat(document.getElementById('v3').value);

    // Validar que se hayan ingresado valores y que estén dentro del rango
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

    // Calcular el promedio del alumno
    const promedio = (calMatematicas + calEspanol + calArtes) / 3;

    // Obtener la tabla de materias
    const tablaMaterias = document.getElementById('materias');

    // Crear una nueva fila y celdas
    const nuevaFila = tablaMaterias.insertRow();
    const celdaNombre = nuevaFila.insertCell(0);
    const celdaMatematicas = nuevaFila.insertCell(1);
    const celdaEspanol = nuevaFila.insertCell(2);
    const celdaArtes = nuevaFila.insertCell(3);
    const celdaPromedio = nuevaFila.insertCell(4);

    // Asignar los valores a las celdas
    celdaNombre.textContent = nombre;
    celdaMatematicas.textContent = calMatematicas;
    celdaEspanol.textContent = calEspanol;
    celdaArtes.textContent = calArtes;
    celdaPromedio.textContent = promedio.toFixed(2);

    // Cambiar el color de la fila según las reglas
    if (promedio < 70) {
        nuevaFila.style.backgroundColor = 'red';
    } else if (promedio >= 70 && promedio < 90) {
        nuevaFila.style.backgroundColor = 'yellow';
    } else {
        nuevaFila.style.backgroundColor = ''; // Sin color
    }

    // Actualizar sumas y conteo
    sumaMatematicas += calMatematicas;
    sumaEspanol += calEspanol;
    sumaArtes += calArtes;
    totalAlumnos++;

    // Calcular promedios
    const promMatematicas = sumaMatematicas / totalAlumnos;
    const promEspanol = sumaEspanol / totalAlumnos;
    const promArtes = sumaArtes / totalAlumnos;
    const promFinal = (promMatematicas + promEspanol + promArtes) / 3;

    // Actualizar los spans de promedios
    document.getElementById('promMatematicas').textContent = promMatematicas.toFixed(1);
    document.getElementById('promEspanol').textContent = promEspanol.toFixed(1);
    document.getElementById('promArtes').textContent = promArtes.toFixed(1);
    document.getElementById('promFinal').textContent = promFinal.toFixed(1);

    // Limpiar los campos de entrada
    
}
function limpiar(){
    document.getElementById('nA').value = '';
    document.getElementById('v1').value = '';
    document.getElementById('v2').value = '';
    document.getElementById('v3').value = '';
}