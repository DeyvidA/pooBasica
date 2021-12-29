// Crear la clase de Rutas de apredizaje (Clase #7)
//  Crear la clase de Clases

class Comment{
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.like = 0;
    }
    
    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.like = " Likes");
        console.log(this.content);
    }
}

function videoPlay(id){
    const urlSecret = "https://UrlSecreta.com" + id;
    console.log("reproducimos la url" + urlSecret);
}
function videoStop(id) {
    const urlSecret = "http://uhnt.com" + id;
    console.log("Pausamos la url" + urlSecret);
}

class platziClass{
    constructor({
        name,
        videoID,
    }){
        this.name = name,
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }
    pausar() {
        videoStop(this.videoStop);
    }
}

class course {
    constructor({
        name,
        clases = [],
        isFree = false,
        lang = "Spanish"
    }) {
        this._name = name;
        this.clases = clases;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombrecito) {
        if(nuevoNombrecito === "Curso Malito de Programacion Basica"){
            console.error("Que pasa prro!!!!!!11");
        } else {
            this._name = nuevoNombrecito;
        }
            
    }
}


const cousoProgBasico = new course ({
    name: "Curso Gratis Programacion Basica",
    isFree: true,
})
 const cursoDefinitivo = new course({
     name: "Curso Definitivo de HTML y CSS",

 })
 const cursoPractico = new course ({
     name: "curso Practio de HTML y CSS",
     lang: "English",
 })

class learningPath{

    constructor({
        name,
        courses = []
    }) {
        this.name = name;
        this.courses = courses;
    }
    
}

const escuelaWeb = new learningPath({
    name: "Escuela Web",
    courses: [
        cousoProgBasico,
        cursoDefinitivo,
        cursoPractico,        
    ]
})

const escuelaData = new learningPath({
    name: "Escuela Data Science",
    courses: [
        cousoProgBasico,
        "curso phyto",
        "curos dataViz"
    ]
})

const escuelaVG = new learningPath({
    name: "Escuela VideoGame",
    courses: [
        cousoProgBasico,
        "curso Unity",
        "curos c#"
    ]
})

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

    publicarComentario(commentContent) {
        const comment = new Comment ({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class freeStudent extends Student{
    constructor(props){
        super(props);
    }

    
   approvedCourses(newCourse){
       if(newCourse.isFree){
        this.approvedCourses.push(newCourse);
       } else {
            console.warn(`Lo sentimos ${this.name}, solo pueden tomas cursos gratuitos`);
        }
    
   }
}

class basicStudent extends Student{
    constructor(props){
        super(props)
    }

    approvedCourses(newCourse) {
        if (newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse)
        } else {
            console.warn(`Lo sentimos ${this.name}, no pudes tomar cursos en ingles`);
        }
    }
} 

class ExpertStudent extends Student{
    constructor(props){
        super(props)
    }

    approvedCourses(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class teacherStudent extends Student{
    constructor(props){
        super(props)
    }

    approvedCourses(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commetContent) {
        const comment = new Comment ({
            content: commetContent,
            studentName: this.name,
            studentRole: "ProfePlatzi",
        });
        comment.publicar();
    }
}




const juan2 = new freeStudent({
    name: "Juan",
    username: "juanito",
    email: "juanito.com",
    twitter: "fjuancd",
    learningPath: [
        escuelaData,
        escuelaVG
    ]
});

const miguelito = new basicStudent({
    name: "Miguelito",
    username: "juanito",
    email: "juanito.com",
    instagram: "fjuancd",
    learningPath: [
        escuelaWeb,
        escuelaData
    ]
});

const Freddy = new teacherStudent({
    name: "Freddy Vega",
    username: "Fredditoito",
    email: "juanito.com",
    instagram: "fjuancd",   
});

