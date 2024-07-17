//the final name should contain $ the beginning and 3 numbers at the end

const generateUserName = (name) => {
    let userName = name.toLowerCase();
    if(userName === name){
        userName = "$" + name + "123";
    }
    return userName;
}


console.log(generateUserName("Nouman Ejaz"));