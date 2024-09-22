const passwordBox = document.querySelector(".password");
const copy = document.querySelector(".copy");
const btn = document.querySelector(".btn");

const length = 12;
const alphUpper= "ABCDEFGHIJCLMNOPQRSTUVWXYZ";
const alphlower= "abcdefghijclmnopqrstuvwxyz";
const number = "1234567890";
const symbel ="@#$%^&*()_+~|}{[]></-=";
const allCarharter = alphUpper + alphlower + number + symbel ;
function createPassword(){
    let password = "";
    password += alphUpper[Math.floor(Math.random() * alphUpper.length)];
    password += alphlower[Math.floor(Math.random() * alphlower.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbel[Math.floor(Math.random() * symbel.length)];

    while(length > password.length ){
        password += allCarharter[Math.floor(Math.random() * allCarharter.length)]
    }
    passwordBox.value = password ;
}
function copyPassword (){
    passwordBox.select();
    document.execCommand("copy")
}