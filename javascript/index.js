// ACTIVIDADES RECORD STRUCT

// 1. Declaracion (record)
let estudiante = {
    nombre: "",
    edad: 0,
    promedio: 0
};

// 2. Inicializacion
let e1 = { nombre: "Ana", edad: 20, promedio: 4.5 };
let e2 = { nombre: "Luis", edad: 22, promedio: 3.8 };
let e3 = { nombre: "Carlos", edad: 19, promedio: 4.2 };

// Arreglo
let estudiantes = [e1, e2, e3];

// 3. Recorrido
console.log("Lista de estudiantes:");
estudiantes.forEach(e => {
    console.log(`Nombre: ${e.nombre}, Edad: ${e.edad}, Promedio: ${e.promedio}`);
});

// 4. Modificacion
estudiantes[1].promedio = 4.0;

// Resultado
console.log("\nDespues de modificar el promedio:");
estudiantes.forEach(e => {
    console.log(`Nombre: ${e.nombre}, Edad: ${e.edad}, Promedio: ${e.promedio}`);
});

// ACTIVIDADES OBJETOS (CLASES E INSTANCIAS)

// CLASE
class EstudianteClase {
    constructor(nombre, edad, promedio) {
        this.nombre = nombre;
        this.edad = edad;
        this.promedio = promedio;
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Promedio: ${this.promedio}`);
    }

    setPromedio(nuevo) {
        this.promedio = nuevo;
    }
}

console.log("\n--- USO DE CLASE (OBJETOS) ---");

// inicializacion
let c1 = new EstudianteClase("Ana", 20, 4.5);
let c2 = new EstudianteClase("Luis", 22, 3.8);
let c3 = new EstudianteClase("Carlos", 19, 4.2);

// arreglo
let listaClase = [c1, c2, c3];

// recorrido
listaClase.forEach(e => e.mostrarInfo());

// modificacion
c2.setPromedio(4.7);

// resultado final
console.log("\nDespues de modificar con metodo:");
listaClase.forEach(e => e.mostrarInfo());