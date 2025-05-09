import {fetchEmployees,pushEmployees} from './modules/init.js'

// Array has been transformed into JSON file and stored in ./data/employees.json
// CREATE AN ARRAY OF EMPLOYEES
let arrEmployees = [
    [34123413, "Zak Ruvalcaba", 3424, "zak@vectacorp.com", "Executive"],
    [23424665, "Sally Smith", 2344, "sally@vectacorp.com", "Administrative"],
    [12341244, "Mark Martin", 5352, "mark@vectacorp.com", "Sales"],
    [14545423, "Robin Banks", 7867, "robin@vectacorp.com", "Marketing"],
    [13413453, "Sue Wedge", 1235, "sue@vectacorp.com", "QA"]
]
// example code demonstrating turning array into json object data
const arrKeys = ["id","name","ext","email","dept"]
let tempArr = {}
let tempArr2 = []
for(let i of arrEmployees) {
    for(let j = 0; j < i.length; j++) {
        tempArr[arrKeys[j]] = i[j]
    }
    tempArr2.push(tempArr)
    tempArr = {}
}
console.log("JSON employees")
console.log(JSON.stringify(tempArr2))
//Then send the data to be pushed to employees.json via the pushEmployees function in init.js
pushEmployees(tempArr2)


// GET DOM ELEMENTS
let empTable    = document.querySelector('#employees')
let empCount    = document.querySelector('#empCount')


// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex)
        }
    }
})

// BUILD THE EMPLOYEES GRID
async function buildGrid(inputPromise) {
    try {
    let jsonEmp = await inputPromise
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let person of jsonEmp.employee) {
        tbody.innerHTML += 
        `
        <tr>
            <td>${person.id}</td>
            <td>${person.name}</td>
            <td>${person.ext}</td>
            <td><a href="mailto:${person.email}">${person.email}</a></td>
            <td>${person.dept}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${jsonEmp.employee.length})`
    }catch (err){
        console.log(err)
    }

}

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
// build grid is called in the fetchEmployees function
//fetchEmployees()
const test = await fetchEmployees()
buildGrid(test)
export default buildGrid