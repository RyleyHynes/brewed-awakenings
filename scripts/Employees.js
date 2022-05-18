import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        //the if statement below allows me to single out the key word that needs to be clicked on 
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")
            console.log(employeeId)
            // Here we iterate through the array of employees 
            for (const employee of employees) {
                //each iteration tries to see if the employee.id in the employees array matches the employeeId in the orders array
                if (employee.id === parseInt(employeeId)) {
                    // before we move on we need to invoke the totalOrders function that we created below and assign its return value to orderCount
                    let orderCount = totalOrders(employee)
                    //we then inject the matching employees name and the orderCount into the alert window
                    window.alert(`${employee.name} has sold ${orderCount} products.`)
                    //Here I am creating an event listener to the employee column that tells me the employees name and the number of products they sold
                }

            }
        }
    }
)

//create a totalOrders function which accepts an employee as a parameter
const totalOrders = (employee) => {
    //create a variable orderCount and set its value to 0
    let orderCount = 0
    //iterate through the orders array to determine 
    for (const order of orders) {
        //if the order.employeeId was equal to the the employee.id
        if (order.employeeId === employee.id)
            //if this is truthy then we increase the order amount by one each time it does(this is done with the ++ operator)
            orderCount++
    }
    //we then return the orderCount because this is the total number of sales that we need to inject into the window alert.
    return orderCount
}