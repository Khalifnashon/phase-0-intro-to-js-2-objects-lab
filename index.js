// Write your solution in this file!

const employee = {}
employee.name = "khalif"
employee.streetAddress = "11 Broadway"
employee;

// it does not modify the original employee, 
//but rather returns a clone with the new data'

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value

    return newEmployee
}
//it('updates `employee` with the given `key` and `value`
// (it is destructive) and returns the entire updated employee

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

//deletes `key` from a clone of employee and returns 
//the new employee (it is non-destructive)
//does not modify the original employee (it is non-destructive)

function deleteFromEmployeeByKey(employee,key){
    const employeeCopy = {...employee}
    delete employeeCopy["name"]
    return employeeCopy;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    const newEmployee = delete employee["name"]
    return employee;
}


