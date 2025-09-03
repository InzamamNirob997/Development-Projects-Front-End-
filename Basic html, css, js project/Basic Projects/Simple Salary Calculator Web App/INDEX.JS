function calculateNetSalary(){
    let gross = document.getElementById('gross').value;
    let tax = document.getElementById('tax').value; 
    

    if (gross === '' || tax === '') {
        document.getElementById('result').innerText = 'Please enter both values.';
        return;
    }

let taxamount = (gross * tax) / 100;
let netsalary = gross - taxamount;


document.getElementById('result').innerText = `The tax has been cut from net your salary is: ${taxamount}
 After tax deduction final net salary will be ${netsalary}`;


}
