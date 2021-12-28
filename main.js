// Objeto Literal
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practio de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },

};

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    /*this.aprobarCurso = function (nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }*/
}

Student.prototype.aprobarCurso  = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
    "Juanita Alejandra",
     15,
     [
      "curos de intruduccion a la produccion de videojuegos",
      "Curso Creacion de personajes"
    ]
);

// Hacer que natalia aprueba otro curso
natalia.cursosAprobados.push("Curso de Responsive Design");


// Prototipos con la sitaxis de clases
class Student2 {
    constructor({
        email,
        name,
        age,
        cursosAprobados = [],
    }) {
        this.name = name;
        this.email = email; 
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2 ({
    email: "mi@gmail.com",
    age:28,
    name:"Miguelito", 
    
});

































