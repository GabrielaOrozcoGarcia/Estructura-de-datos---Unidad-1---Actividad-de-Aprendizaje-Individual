package main

import (
	"actividad-go/miniproyecto"
	"fmt"
)

// ACTIVIDADES RECORD STRUCT

// 1. Declaracion (struct)
type Estudiante struct {
	nombre   string
	edad     int
	promedio float64
}

// METODOS (simulacion de clase)

// mostrar informacion
func (e Estudiante) mostrarInfo() {
	fmt.Println("Nombre:", e.nombre, "Edad:", e.edad, "Promedio:", e.promedio)
}

// modificar promedio
func (e *Estudiante) setPromedio(nuevo float64) {
	e.promedio = nuevo
}

func main() {

	// 2. Inicializacion
	e1 := Estudiante{"Ana", 20, 4.5}
	e2 := Estudiante{"Luis", 22, 3.8}
	e3 := Estudiante{"Carlos", 19, 4.2}

	// ARREGLO
	estudiantes := []Estudiante{e1, e2, e3}

	// 3. Recorrido
	fmt.Println("Lista de estudiantes:")
	for _, e := range estudiantes {
		fmt.Println("Nombre:", e.nombre, "Edad:", e.edad, "Promedio:", e.promedio)
	}

	// 4. Modificacion
	estudiantes[1].promedio = 4.0

	// Resultado
	fmt.Println("\nDespues de modificar el promedio:")
	for _, e := range estudiantes {
		fmt.Println("Nombre:", e.nombre, "Edad:", e.edad, "Promedio:", e.promedio)
	}

	// ACTIVIDADES OBJETOS (CLASES E INSTANCIAS)

	fmt.Println("\n--- USO DE METODOS (OBJETOS) ---")

	// recorrido usando metodo
	for i := range estudiantes {
		estudiantes[i].mostrarInfo()
	}

	// modificacion usando metodo
	estudiantes[1].setPromedio(4.7)

	// resultado final
	fmt.Println("\nDespues de modificar con metodo:")
	for i := range estudiantes {
		estudiantes[i].mostrarInfo()
	}

	// MINI PROYECTO VEHICULOS
	fmt.Println("\n===== MINI PROYECTO VEHICULOS =====")
	miniproyecto.EjecutarMiniProyecto()
}
