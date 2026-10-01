

// 1. Create a function named hello
function hello() {
    console.log("Hello Everyone");
}
hello();


// 2. welcome function
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();


// 3. navi function
function navi() {
    console.log("Abinesh");
}
navi();


// 4. message function
function message() {
    console.log("Good Morning");
    console.log("Welcome");
    console.log("Have a Nice Day");
}
message();


// 5. numbers function
function numbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
numbers();


// 6. check function
function check() {
    let age = 20;

    if (age >= 18) {
        console.log("You are eligible");
    }
}
check();


// 7. details function
function details() {
    console.log("Name: Abinesh");
    console.log("Qualification: B.Tech");
    console.log("Role: Developer");
}
details();


// 8. company function
function company() {
    console.log("ABC Company");
}
company();


// 9. welcomeUser called three times
function welcomeUser() {
    console.log("Welcome User");
}

welcomeUser();
welcomeUser();
welcomeUser();


// 10. Two different functions
function firstFunction() {
    console.log("First Function");
}

function secondFunction() {
    console.log("Second Function");
}

firstFunction();
secondFunction();




// 11. One parameter
function display(value) {
    console.log(value);
}

display("Hello");


// 12. Two parameters
function displayTwo(value1, value2) {
    console.log(value1);
    console.log(value2);
}

displayTwo("Abinesh", 22);


// 13. Addition
function add(a, b) {
    console.log(a + b);
}

add(10, 20);


// 14. Subtraction
function sub(a, b) {
    console.log(a - b);
}

sub(20, 10);


// 15. Multiplication
function multiply(a, b) {
    console.log(a * b);
}

multiply(10, 5);


// 16. Division
function divide(a, b) {
    console.log(a / b);
}

divide(20, 5);


// 17. Student details
function student(name, age) {
    console.log("Name:", name);
    console.log("Age:", age);
}

student("Abinesh", 22);


// 18. Employee details
function employee(name, role, salary) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Salary:", salary);
}

employee("Abinesh", "Developer", 40000);


// 19. Four parameters
function fourValues(a, b, c, d) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

fourValues(10, 20, 30, 40);


// 20. Six parameters
function sixValues(a, b, c, d, e, f) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}

sixValues(10, 20, 30, 40, 50, 60);



// ==================== Default Parameters ====================

// 21. Default department
function student(name, department = "CSE", cgpa) {
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("CGPA:", cgpa);
}

student("Abinesh", undefined, 8.5);


// 22. Default age
function user(name, age = 18) {
    console.log("Name:", name);
    console.log("Age:", age);
}

user("Abinesh");


// 23. Default role
function employee(name, role = "Developer") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employee("Abinesh");


// 24. Form function
function form(name, department, cgpa, disability = "no") {
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("CGPA:", cgpa);
    console.log("Disability:", disability);
}

form("Abinesh", "CSE", 8.5);
form("Arun", "ECE", 8.0, "yes");


// 25. Two normal + one default parameter
function college(name, department, year = 2026) {
    console.log(name);
    console.log(department);
    console.log(year);
}

college("Abinesh", "CSE");



// ==================== Return ====================

// 26. Addition return
function addReturn(a, b) {
    return a + b;
}

console.log(addReturn(10, 20));


// 27. Subtraction return
function subReturn(a, b) {
    return a - b;
}

console.log(subReturn(20, 10));


// 28. Multiplication return
function multiplyReturn(a, b) {
    return a * b;
}

console.log(multiplyReturn(10, 5));


// 29. Division return
function divideReturn(a, b) {
    return a / b;
}

console.log(divideReturn(20, 5));


// 30. Salary function
function salary() {
    return 40000;
}

let mySalary = salary();
console.log(mySalary);


// 31. Employee salary
function employeeSalary(salary) {
    return salary;
}

console.log(employeeSalary(50000));


// 32. Return person's name
function personName() {
    return "Abinesh";
}

let name = personName();
console.log(name);


// 33. Pass or Fail
function result(marks) {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(result(80));


// 34. Return discount value
function discountValue(price, discount) {
    return discount;
}

console.log(discountValue(1000, 100));


// 35. Return result and use it in another function
function addition(a, b) {
    return a + b;
}

function displayResult(value) {
    console.log(value);
}

let resultValue = addition(10, 20);
displayResult(resultValue);



// ==================== Outer Scope ====================

// 36. Variable outside function
let messageText = "Hello JavaScript";

function showMessage() {
    console.log(messageText);
}

showMessage();


// 37. Object outside function
let person = {
    name: "Abinesh",
    designation: "Developer"
};

function showPerson() {
    console.log(person.name);
    console.log(person.designation);
}

showPerson();


// 38. Salary + bonus
let salaryAmount = 40000;

function addBonus() {
    let bonus = 5000;
    console.log(salaryAmount + bonus);
}

addBonus();


// 39. Employee object
let employeeDetails = {
    name: "Abinesh",
    role: "Developer",
    salary: 40000
};

function showEmployee() {
    console.log(employeeDetails.name);
    console.log(employeeDetails.role);
    console.log(employeeDetails.salary);
}

showEmployee();


// 40. Two functions accessing same variable
let companyName = "ABC Company";

function showCompany() {
    console.log(companyName);
}

function printCompany() {
    console.log(companyName);
}

showCompany();
printCompany();



// ==================== Named, Anonymous & Arrow Functions ====================

// 41. Named function
function namedFunction(value) {
    console.log(value);
}

namedFunction("Hello");


// 42. Anonymous function
let anonymousFunction = function(value) {
    console.log(value);
};

anonymousFunction("Hello Anonymous");


// 43. Arrow function
let arrowFunction = (value) => {
    console.log(value);
};

arrowFunction("Hello Arrow");


// 44. Arrow function with two parameters
let addArrow = (a, b) => {
    console.log(a + b);
};

addArrow(10, 20);


// 45. Same addition using three function types

// Named function
function namedAdd(a, b) {
    console.log(a + b);
}

// Anonymous function
let anonymousAdd = function(a, b) {
    console.log(a + b);
};

// Arrow function
let arrowAdd = (a, b) => {
    console.log(a + b);
};

namedAdd(10, 20);
anonymousAdd(10, 20);
arrowAdd(10, 20);



// ==================== IIFE ====================

// 46. Simple IIFE
(function() {
    console.log("Hello JavaScript");
})();


// 47. IIFE with name
(function(name) {
    console.log("Hello " + name);
})("Abinesh");


// 48. IIFE with product and discount
(function(product, discount) {
    console.log(product + " special offer: " + discount + "% discount");
})("Laptop", 20);



// ==================== Callback & Higher-Order Functions ====================

// 49. Add function with callback
function addCallback(callback, a, b) {
    let result = a + b;

    console.log("Addition:", result);

    callback(a, b);
}

function callbackFunction(a, b) {
    console.log("Callback values:", a, b);
}

addCallback(callbackFunction, 10, 20);


// 50. Sub function passed as callback to add

function addNumbers(callback, a, b) {
    let result = a + b;

    console.log("Addition:", result);

    callback(a, b);
}

function subNumbers(a, b) {
    console.log("Subtraction:", a - b);
}

addNumbers(subNumbers, 20, 10);