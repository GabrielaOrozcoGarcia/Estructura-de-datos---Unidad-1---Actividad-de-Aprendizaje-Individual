package miniproyecto

import "fmt"

// struct con matriz
type Vehiculo struct {
	marca   string
	modelo  string
	consumo [][]float64
}

// mostrar informacion
func (v Vehiculo) mostrarInfo() {
	fmt.Println("Marca:", v.marca)
	fmt.Println("Modelo:", v.modelo)
	fmt.Println("Consumo:")
	for i, fila := range v.consumo {
		fmt.Println("Semana", i+1, ":", fila)
	}
}

// calcular consumo promedio
func (v Vehiculo) calcularPromedio() float64 {
	var suma float64
	var total int

	for _, fila := range v.consumo {
		for _, valor := range fila {
			suma += valor
			total++
		}
	}
	return suma / float64(total)
}

func EjecutarMiniProyecto() {

	v1 := Vehiculo{
		marca:   "Toyota",
		modelo:  "Corolla",
		consumo: [][]float64{{10, 12}, {11, 13}},
	}

	v2 := Vehiculo{
		marca:   "Mazda",
		modelo:  "CX5",
		consumo: [][]float64{{9, 11}, {10, 12}},
	}

	v3 := Vehiculo{
		marca:   "Chevrolet",
		modelo:  "Onix",
		consumo: [][]float64{{11, 13}, {12, 14}},
	}

	vehiculos := []Vehiculo{v1, v2, v3}

	// recorrido
	for _, v := range vehiculos {
		v.mostrarInfo()
		fmt.Println("Consumo promedio:", v.calcularPromedio())
		fmt.Println("-----")
	}
}
