import chalk from "chalk"
import figlet from "figlet"
import inquirer from "inquirer";


console.log(chalk.blue(
    figlet.textSync('Student - Management',{
        horizontalLayout: "controlled smushing",
    })
));


class Student_Management_System{
    private    _school_id = 0;
    private    _school_name = 'jfkdsl';
    protected  _person_name:string;
    protected  _person_id:number;
    protected  _person_class:string | string[];
    protected  _person_subjects:string[];

    constructor(id:number,name:string,s_class:string | string[],subjects:string[]){
        this._person_id = id;
        this._person_name = name;
        this._person_class = s_class;
        this._person_subjects = subjects
    }

    setter(id:number,name:string){
        this._school_id = id;
        this._school_name = name;
    }

    getter(){
        console.log(this._school_id);
        console.log(this._school_name);
    }
}


class Student extends Student_Management_System{
    student_attendence: number;
    student_marks: number;

    constructor(id:number,name:string,s_class:string,subjects:string[],st_attendance:number,st_marks:number){
        super(id,name,s_class,subjects);
        this.student_attendence = st_attendance;
        this.student_marks = st_marks;
    }
}


class Teacher extends Student_Management_System{
    teacher_rating: number;
    teacher_behaviour: string;
    
    constructor(id:number,name:string,s_class:string[],subjects:string[],tr_attendance:number,tr_behaviour:string){
        super(id,name,s_class,subjects);
        this.teacher_rating = tr_attendance;
        this.teacher_behaviour = tr_behaviour;
    }


    getter(): void {
        console.log(this.teacher_rating);
        console.log(this.teacher_behaviour);
    }
}




// let Student1 = new Student_Management_System(234,'LGS');
// Student1.getter();