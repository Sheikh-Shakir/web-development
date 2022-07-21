//document.getElementById("count-el").innerHTML = "5";
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0


console.log(saveEl)
function increment() {
    count += 1;
    countEl.innerHTML = count;

}

function save() {
    let countstr = count + " - " 
    saveEl.textContent += countstr
countEl.textContent=0
    console.log(count)

}
let num1=8
let num2=2
document.getElementById("num1-el").textContent = num1;
document.getElementById("num1-e2").textContent = num2;

function add() {
    var num1 = parseInt(document.getElementById("num1-el").value);
    var num2 = parseInt(document.getElementById("num1-e2").value);
    var sum = num1 + num2;
    var showresult = document.getElementById("result");
    showresult.innerHTML = "The Sum of two Numbers is " + sum;

}