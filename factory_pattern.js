function Developler(name) {
    this.name = name;
    this.type = "developer"
}

function Tester(name) {
    this.name = name;
    this.type = "tester"
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Developler(name)
                break;
            case 2:
                return new Tester(name)
                break;
        }
    }
}

function say() {
    console.log("hi i am " + this.name + " and I am " + this.type)
}

const employeeFactory = new EmployeeFactory()
const employees = [] //database in the form of array

employees.push(employeeFactory.create("sam", 1))
employees.push(employeeFactory.create("tom", 2))

employees.forEach(emp => {
    say.call(emp)
})