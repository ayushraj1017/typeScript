export {}
let mess="hello Guys";
// console.log(mess);


let x=10;
const y=30;


let sum;  //undefined
// const title;  initializer is important
const title="hello world";

let name:string="Ayush";

let value:string=`my name is ${name}`;

console.log(value);


let isNew:boolean=null;
let nyNumber:number=undefined;

let list1:number[]=[1,2,3,4,5];

let list2:Array<number>=[1,2,3,4,5];

let person:[number,string]=[10,"ayush"];

enum Color{red=5,blue,green};

let c:Color=Color.blue;

console.log(c);

let myVariable:any=10;
myVariable=true;
myVariable="ayush"; //no error

console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();  //Bad practice

//unKnown

let myVariable1:unknown=10;

(myVariable1 as string).toLowerCase();

//function

function add(num1?:number,num2:number=10):number{
    return num1+num2;
}

console.log(add(5));

class Employee{
    employeeName:string;

    constructor(name:string){
        this.employeeName=name;
    }

    greet(){
        console.log(`${this.employeeName}`);
        
    }
}

let emp1=new Employee('Ayush');
console.log(emp1.employeeName);
emp1.greet();


//inheritance

class Manager extends Employee{
    constructor(managerName:string) {
        super(managerName);

        
    }

    delegateWork(){
        console.log(`manager delegate work`);
        
    }
}

let m1=new Manager('Bruce');
m1.greet();
m1.delegateWork();
console.log(m1.employeeName);

















