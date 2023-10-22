function Student(gpa1, gpa2, gpa3, gpa4, gpa5, gpa6) {
    return{
        sem1 : gpa1,
        sem2 : gpa2,
        sem3 : gpa3,
        sem4 : gpa4,
        sem5 : gpa5,
        sem6 : gpa6,

        cgpaPrinter: function(gpa1, gpa2, gpa3, gpa4, gpa5, gpa6) {
            let cgpa = (gpa1 + gpa2 + gpa3 + gpa4 + gpa5 + gpa6) / 6;
            console.log(cgpa);
        }
            
    }
}

let student = Student(8.5, 9.0, 10.0, 9.4,9.8,8.5)

student.cgpaPrinter();