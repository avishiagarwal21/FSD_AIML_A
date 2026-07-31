const nums=[1,2,3,4,5];
// const b=nums[0];
// const c=nums[1];
//destructuring of array
const [b,c]=nums;
console.log("b",b);
console.log("c",c);
const student={
    name: "Avishi",
    age: 20,
    branch: "CSE AIML",
}

// const name=student.name;
// const age=student.age;
// const branch=student.branch;
//destructuring of object
const {name,age,branch}=student;

console.log("Name",name);
console.log("Age",age);
console.log("Branch",branch);