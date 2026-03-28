// clase con matriz
class Vehiculo {
    constructor(marca, modelo, consumo) {
        this.marca = marca;
        this.modelo = modelo;
        this.consumo = consumo; // matriz
    }

    mostrarInfo() {
        console.log("Marca:", this.marca);
        console.log("Modelo:", this.modelo);
        console.log("Consumo:");
        this.consumo.forEach((fila, i) => {
            console.log(`Semana ${i + 1}: ${fila}`);
        });
    }

    calcularPromedio() {
        let suma = 0;
        let total = 0;

        this.consumo.forEach(fila => {
            fila.forEach(valor => {
                suma += valor;
                total++;
            });
        });

        return suma / total;
    }
}

// objetos
let v1 = new Vehiculo("Toyota", "Corolla", [[10, 12], [11, 13]]);
let v2 = new Vehiculo("Mazda", "CX5", [[9, 11], [10, 12]]);
let v3 = new Vehiculo("Chevrolet", "Onix", [[11, 13], [12, 14]]);

let vehiculos = [v1, v2, v3];

// recorrido
vehiculos.forEach(v => {
    v.mostrarInfo();
    console.log("Consumo promedio:", v.calcularPromedio());
    console.log("-----");
});