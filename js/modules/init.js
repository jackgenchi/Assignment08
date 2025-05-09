import buildGrid from '../script.js'

// fetch data from json file
async function fetchEmployees() {
    try{
        const response = await fetch('../../data/employees.json')
        const employeesInit = await response.json()
        console.log("fetch Employee is running. Promise returned:")
        console.log(employeesInit)
        return employeesInit
    }catch(err) {
        console.log(err)
    }
}

//FUNCTION TO POST INPUT DATA TO JSON FILE
async function pushEmployees(inputEmp) {
    try{
        console.log("push Employee is starting running. input value: ")
        console.log(JSON.stringify(inputEmp))
        //currently running into issue with POST'ing data to the json file. Might be because post is disabled by Firefox
        await fetch('../../data/employees.json', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputEmp)
        })
        // const employeesInit = await response.json()
        // console.log("push Employee is finished running. Promise returned:")
        // console.log(employeesInit)

        //return employeesInit
    }catch(err) {
        console.log(err)
    }
}
export {fetchEmployees, pushEmployees}

