/* user info */
const user = {
    id: 36,
    name: 'David Clerk',
    age: 25,
    address: 'Dhaka, Bangladesh'
}

const stringifyFormate = JSON.stringify(user);
// console.log(stringifyFormate);
const objectConvert = JSON.parse(stringifyFormate);
// console.log(objectConvert);


const office = {
    name: 'WEB DEVELOPER LTD',
    address: 'Dhanmondi, Dhaka, Bangladesh',
    website: 'www.webdev.edu.bd',
    patners: ['amazon', 'ebay', 'facebook'],
    jobSalary: {
        CEO: 50000,
        COO: 30000,
        CMO: 25000,
        CFO: 15000
    },
    value: 900000000
}

const dataBase = JSON.stringify(office);
// console.log(dataBase);

const convertDataObject = JSON.parse(dataBase);
// console.log(convertDataObject);

// console.log(office.address);