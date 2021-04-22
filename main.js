"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var mess = "hello Guys";
// console.log(mess);
var x = 10;
var y = 30;
var sum; //undefined
// const title;  initializer is important
var title = "hello world";
var name = "Ayush";
var value = "my name is " + name;
console.log(value);
var isNew = null;
var nyNumber = undefined;
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5];
var person = [10, "ayush"];
var Color;
(function (Color) {
    Color[Color["red"] = 5] = "red";
    Color[Color["blue"] = 6] = "blue";
    Color[Color["green"] = 7] = "green";
})(Color || (Color = {}));
;
var c = Color.blue;
console.log(c);
var myVariable = 10;
myVariable = true;
myVariable = "ayush"; //no error
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase(); //Bad practice
//unKnown
var myVariable1 = 10;
myVariable1.toLowerCase();
//function
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
console.log(add(5));
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("" + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Ayush');
console.log(emp1.employeeName);
emp1.greet();
//inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("manager delegate work");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.greet();
m1.delegateWork();
console.log(m1.employeeName);
