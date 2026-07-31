const student ={
    Name: "Avishi",
    Id: 53,
    Branch: "CSE AIML",
};

const Studentname={...student,
    address:
    {
    city: "Ghaziabad ",
    state: "Uttar Pradesh",
    pin: 201009,
    }

}
console.log("student",student);
console.log("Studentname",Studentname);