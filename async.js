//callback or promise for asnchronous

    setTimeout(()=>{
    console.log("register here");
},5000);

function login(){
    setTimeout(()=>{
    console.log("login here");
},4000);
}

function getData(){
    console.log("get data here");
}

function displayData(){
    setTimeout(()=>{
    console.log("display data here");
},1000);
}


register();
login();
getData();
displayData();
console.log("call another App");