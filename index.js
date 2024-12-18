//Objects literal

const jonas = {
    firsName: "shamsa",
    address: "Hw",
    email: "shamsa@gmail.com",
    age: 27,
    job: "student"
};

console.log(jonas);

//dot notation to getting data
console.log(jonas.email);

//bracket notation

console.log(jonas["email"]);

const intertedIn = prompt("what do you want to know about jonas? choose between firstName, address, email, age, job");

if(jonas[intertedIn]){
    console.log(jonas[intertedIn]);
}else{
    console.log('wrong requist! choose between firstName, address, email, age, job')
}

jonas.location = "hodan";
jonas['facebook'] = 'shamsa';
console.log(jonas);