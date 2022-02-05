//create a pop that prompts to enter a email address
//create a pop that prompts to enter a password 
function login(){
    var email = prompt("Enter your email address");
    var password = prompt("Enter your password");
    if(email === "shakir@gmail.com" && password === "123"){
        alert("Welcome to the site");
    }else{
        alert("Invalid email or password");
    }
}