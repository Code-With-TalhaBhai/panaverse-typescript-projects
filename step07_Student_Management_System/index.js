import chalk from "chalk";
import figlet from "figlet";
console.log(chalk.blue(figlet.textSync('Student - Management', {
    horizontalLayout: "controlled smushing",
})));
class Student_Management_System {
    student_name = '';
    stdudent_id = 0;
    // constructor(name:string,id:number){
    //     this.stdudent_id = id;
    //     this.student_name = name;
    // }
    setter(name, id) {
        this.stdudent_id = id;
        this.student_name = name;
    }
    getter() {
        console.log(this.student_name);
        console.log(this.stdudent_id);
    }
}
// let Student1 = new Student_Management_System('Talha',234);
let Student1 = new Student_Management_System();
Student1.setter('fjkdsl', 234);
Student1.getter();
