//EJERCICIO 21: PELUQUERIA

//OBJETO: Clase que representa un horario
class Horario {
  constructor(hora) {
    this.hora    = hora;
    this.ocupado = false;
    this.cita    = null; // aqui se guarda el Record
  }
}

// RECORD: estructura de datos de una cita (solo datos, sin logica)
class CitaRecord {
  constructor(nombreCliente) {
    this.nombreCliente = nombreCliente;
  }
}

//STRUCT: estructura fija que agrupa id + horario
function crearSlot(id, hora) {
  return { id: id, horario: new Horario(hora) };
}

// 1. Arreglo de horarios disponibles (arreglo de Structs que contienen Objetos)
const slots = [
  crearSlot(0, "08:00"),
  crearSlot(1, "09:00"),
  crearSlot(2, "10:00"),
  crearSlot(3, "11:00"),
  crearSlot(4, "12:00"),
  crearSlot(5, "13:00"),
  crearSlot(6, "14:00"),
  crearSlot(7, "15:00")
];

console.log("\n--- Horarios disponibles ---");
slots.forEach(s => console.log(s.id + " - " + s.horario.hora));

// 2. Registrar citas ocupadas
console.log("\n--- Reservar cita ---");

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let intento = 1;

function pedirPosicion() {
  if (intento > 2) {
    mostrarEstado();
    rl.close();
    return;
  }

  rl.question("Ingrese la posicion del horario (0 a 7): ", (input) => {
    const pos = parseInt(input);

    if (pos >= 0 && pos < slots.length) {
      const horario = slots[pos].horario; // acceso al Objeto
      if (!horario.ocupado) {
        horario.ocupado = true;
        horario.cita    = new CitaRecord("Cliente " + (intento)); // se guarda el Record
        console.log("Cita reservada correctamente.");
      } else {
        console.log("Este horario se encuentra ocupado.");
      }
    } else {
      console.log("Posicion invalida.");
    }

    intento++;
    pedirPosicion();
  });
}

// 3. Mostrar horarios libres y ocupados
function mostrarEstado() {
  console.log("\n--- Estado de horarios ---");
  slots.forEach(s => {
    if (s.horario.ocupado) {
      console.log(s.horario.hora + " - Ocupado");
    } else {
      console.log(s.horario.hora + " - Libre");
    }
  });
}

pedirPosicion();