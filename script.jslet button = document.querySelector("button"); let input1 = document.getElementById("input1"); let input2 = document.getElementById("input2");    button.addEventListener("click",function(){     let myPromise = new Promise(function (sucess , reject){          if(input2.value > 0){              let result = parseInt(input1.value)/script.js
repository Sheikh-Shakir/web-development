let button = document.querySelector("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");



button.addEventListener("click",function(){
    let myPromise = new Promise(function (sucess , reject){

        if(input2.value > 0){

            let result = parseInt(input1.value)/parseInt(input2.value);

            console.log(result);

            sucess("divisor is greater than zero");
        }
        else{
            reject("divisor cannot be zero");
        }
    });

    myPromise.then((message)=>{console.log(message)}).catch((message)=>{console.log(message);})

});
