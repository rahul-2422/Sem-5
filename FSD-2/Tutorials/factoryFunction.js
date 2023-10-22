function createStudent(n,i) {
    return{
        name : n,
        id : i,
        printDetail : function(){
            console.log(this.name + " " + this.id);
        }
    };
}

let stud1 = createStudent("jack",1);

stud1.printDetail();


// adding function to prototype

function Student(name, id) {
    this.name = name;
    this.id = id;
}

Student.prototype.printDetail = function(){
    console.log(this.name + " " + this.id);
}



