// Write your solution in this file!
let employee ={
    name: 'Sami',
        streetAddress: '1541 Broadway'
}
function updateEmployeeWithKeyAndValue(employee , key,value)
{
      return {
        ...employee,
        [key]: value,
      };
    };
    console.log(updateEmployeeWithKeyAndValue(employee,'name','sid'))

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    employee[key] = value;
return employee;
   
}
console.log(employee)
destructivelyUpdateEmployeeWithKeyAndValue(employee,'name', 'Sam')
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')
console.log(employee)

function deleteFromEmployeeByKey(employee, key)
{
   const nemp={...employee};
   delete nemp[key];
   return nemp;
    
}
console.log(deleteFromEmployeeByKey(employee, 'name'))
function destructivelyDeleteFromEmployeeByKey(employee, key)
{
     delete employee[key]   
     return employee
}
destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress')
console.log(employee)