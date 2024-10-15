//* 2. User Object Type
// Create an interface for a user object that includes the following properties:

// id: a number
// name: a string
// email: a string
// isActive: a boolean
// Then, create a function that takes a user object and returns a string that says whether the user is active or not.

// Solution:

interface User{
    id:number,
    name:string,
    email:string,
    isActive:boolean
}

function returnUser(user:User):string{
    if(user.isActive){
        return `${user.name} is Active.`
    }else{
        return `${user.name} is not Active`
    }
}

const myuser:User={id:1,name:"Heeba",email:"heebak45@gmail.com",isActive:true};
console.log(returnUser(myuser));
