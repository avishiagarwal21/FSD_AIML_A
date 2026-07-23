function register(cb){
    setTimeout(()=>{
        console.log("Register here");
        cb();
    },5000);
}

function login(cb){
    setTimeout(()=>{
        console.log("Login here");
        cb();
    },4000);
}

function getData(cb){
    setTimeout(()=>{
        console.log("Get Data here");
        cb();
    },2000);
}

function displayData(){
    setTimeout(()=>{
        console.log("Display Data here");
    },1000);
}

// callback hell 
register(() => {
    login(() => {
        getData(() => {
            displayData();
        });
    });
});

console.log("Call another App");