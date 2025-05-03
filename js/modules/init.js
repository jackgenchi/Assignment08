import buildGrid from '../script.js'

// create blank array to store employees in
//let tempArr1 = []

// fetch data from json file
async function fetchEmployees(tempArr1) {
    try{
        const response = await fetch('../../data/employees.json')
        const employeesInit = await response.json()
        let tempArr2 = []
        for (let info of employeesInit.employee) {
            tempArr2.push(info.id, info.name, info.ext, info.email,info.dept)
            tempArr1.push(tempArr2)
            tempArr2=[]     
        }
        console.log(tempArr1)
    }catch(err) {
        console.log(err)
    }
    finally{
        //console.log("Init js running. Returning value: "+ tempArr1)
        buildGrid(tempArr1)
        //return tempArr1
        
    }
}
export default fetchEmployees