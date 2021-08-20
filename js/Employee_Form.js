const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("constants");

window.addEventListener("DOMContentLoaded", (event) => {
    // validate name
    const name = document.querySelector("#name");
    const textError = document.querySelector(".name-error");
    name.addEventListener("input", function() {
        if(name.nodeValue.length == 0) {
            textError.textContent = ""
            return;
        }
        try{
            new EmployeeData().name = name.nodeValue;
            console.log(name.value);
            textError.textContent = "";
        }catch(error){
            textError.textContent = error;
        }
    });

    // validate date 
    function checkFullDate(fulldate){
        console.log(fulldate)
        try{
            new EmployeeData().startDate = fulldate
            dateError.textContent = "";
        }catch(error{
            dateError.textContent = error
        }
    }
    const day = document.querySelector("#day")
    const month = document.querySelector("#month")
    const year = document.querySelector("#year")
    const dateError = document.querySelector(".date-error")
    day.addEventListener("change", function(){
        let fulldate =  day.value +" "+month.value+" "+year.value
    })
    month.addEventListener("change", function(){
        let fulldate =  day.value +" "+month.value+" "+year.value
    })
    year.addEventListener("change", function(){
        let fulldate =  day.value +" "+month.value+" "+year.value
    })

    // validate salary 
    const salary = document.querySelector("#salary");
    const output = document.querySelector(".salary-output")
    output.textContent = salary.value;
    salary.addEventListener("input", function(){
        output.textContent = salary.value;
    });
});

function setTextValue(component,problem){
    let textError = document.querySelector(component);
    textError.textContent = problem
}

function save(){
    try{
        let newEmployee = createEmployeePayroll()
    } catch (error) {
        alert(error);
    }
}

function createEmployeePayroll {
    let employee = new EmployeeData()
    try {
      employee.name = getInputValueById('#name')
    } catch (error) {
      setTextValue('.name-error',error)
      throw error;
    }
    employee.profileImage = getSelectionValue("[name=profile]").pop()
    employee.gender = getSelectionValue("[name=gender]").pop()
    employee.department = getSelectionValue("[name=department]")
    employee.salary = getInputValueById("#salary")
    employee.notes = getInputValueById("#notes")
    let date = getInputValueById("#day")+" "+getInputValueById("#month")+" "+getInputValueById("#year")
    employee.startDate = new Date(date)
    alert(employee.toString())
    return employee
  }
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
};

function save() {
    try {
        let newEmployee = new EmployeeData();
    } catch (error) {
        alert(error);
    }
}