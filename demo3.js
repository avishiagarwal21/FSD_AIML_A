function Sum(...num){
// const sum=num.reduce((i,s)=>s+i);
let sum=0;
for(i of num){
    sum+=i;
}
return sum;
}

console.log("sum", Sum(1,2,3,4,5));