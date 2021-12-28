// Crear la clase de Rutas de apredizaje (Clase #7)
class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        },
        this.approvedCourses = approvedCourses = [];
        this.learningPaths = learningPaths = [];
    }
}

const juan2 = new Student({
    name: "Juan",
    username: "juanito",
    email: "juanito.com",
    twitter: "fjuancd",
});

const miguelito = new Student({
    name: "Miguelito",
    username: "juanito",
    email: "juanito.com",
    instagram: "fjuancd",
});