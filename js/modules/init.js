import buildGrid from '../script.js'

// fetch data from json file
async function fetchEmployees() {
    try{
        const response = await fetch('../../data/employees.json')
        const employeesInit = await response.json()
        console.log("fetch Employee is running. Promise returned:")
        console.log(employeesInit)

        //call buildGrid with passed in employees in JSON
        //buildGrid(employeesInit)
        return employeesInit
    }catch(err) {
        console.log(err)
    }

}
export default fetchEmployees
