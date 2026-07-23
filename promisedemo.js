function register(){
     return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve();
            console.log("Get Register here");
        },2000);
     })
}

function login(){
     return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject();
            console.log("Login here");
        },5000);
     })
    
}

function getData(){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject();
            console.log("Fetch Data here");
        },2000);
     })
}

function displayData(){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                rsolve();
            console.log("Display Data here");
        },2000);
     })
}

// register().then(login).then(getData).then(displayData).catch((err)=>{
//     console.log("Error");
// });
async function test(){
    try{
        await register();
        await login ();
        await getData();
        await displayData();
    }catch(err){
        console.log("Error");
    }
}
test();
console.log("Call another App");