const student = {
    name: "Nouman Ejaz",
    age: 21,
    cgpa: 3.61,
    department: "Software Engineering"
};

const fullName = "Nouman Ejaz";

for (let s of fullName){ //for - of loop for strings and arrays not for objects specifically
    console.log(s);
}

for(let s in student){ //for - in loop for  object which returns keys of the objects (can also be used for arrays )
    console.log(s, student[s]);
}
