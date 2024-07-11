let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
console.log(person.name); // Output: John
person.greet(); // Output: Hello, John
