// console.log("Hello Heeba"); //1. Basic Example

// **************************************************

// 2. Greet function example 
// function greet(person,date){
//     console.log(`Hello ${person} , today is ${date}`);
// }


// greet("Heeba") //Typescript will show error on running this file by clearly stating that :   "An argument for 'date' was not provided."

//  *****************************************************************************


//3. Making greet function better
// function greet(person:string,date:Date){
//     console.log(`Hello ${person} , today is ${date.toDateString()}`);
// }

// greet("Heeba",new Date()) 

// *************************************************************************************

// 4. Return type Annotations
// function getNumber():number{
    // return 42 --> //This is correct because it has been specified above that the function will return the output of type number
    // return "heeba" --> //This is will give error as return type should be number only
// }

// ******************************************************************************************


// 5. Object Types && Optional types
// function printCoordinates(point:{x:number,y?:number}){  --> This basically means that if 'y' is availabe then log 'y'
    // console.log('The x-coordinate is'+ point.x);
    // console.log('The y-coordinate is'+ point?.y);
// }

// printCoordinates({x:3,y:5})

//  *************************************************************************************************************

// 6. Union Types
// function printId(id:number|string){   --> //This basically means that id can be number as well as string
//     console.log("Your Id is"+id);
// }

// printId(26) -->  //This is right
// printId("Heeba")  --> //This is right too
// printId({myid:6677})  --> //This is wrong bcz type of id can't be of object type


// ***************************************************************************************************


// 7. Type Aliases
// type Point={
    // x:number,
    // y:number
// }

// type Point={  //This will give error as you cannot add or change type once it is created that;s where interface comes in handy
//     z:number
// }
// function printCoordinates(point:Point){  
//     console.log('The x-coordinate is'+ point.x);
//     console.log('The y-coordinate is'+ point?.y);
// }

// printCoordinates({x:45,y:60})

// *********************************************************************************************

// 8. Interfaces
// interface user{
//     name:string,
//     roll:number
// }

// interface user{     //we can add another property in same user
//     address:string
// }

// interface anotherUser extends user{  //this will create anotherUser with all the properties of user + its own property(cgpa)
//     cgpa:number 
// }

// const myUser:user={
//     name:"Heeba",
//     roll:24,
//     address:"New Delhi"
// }

// console.log(myUser);

// **************************************************************************************************

// 9. Type Assertions
// Type assertions allow you to tell TypeScript that you know more about the type of a value than it can infer on its own. It's like saying, "Trust me, I know this is actually a specific type.

// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// we can also write the above as

// const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");  //Just remember to not use this syntax in .tsx file


// ************************************************************************************************************

// 10. Literal Types
// These are just a way to define variables that can take specific values ,like "const" variables in Javascript.
// Ex:-  let x:"hello"="hello" ; --> "x" will have only value "hello"
//       x="hello" -->this is correct
//       x="helloww"  --> this is wrong  

// but the thing is that Literal types aren't very useful by themselves because they only allow a single value. But when combined with other types, they become powerful.

// Using Literal Types in Functions
// You can use literal types to restrict a function to accept only certain values. For example:

// function printText(s: string, alignment: "left" | "right" | "center") {
        // The function only accepts these three specific alignment values
// }
// In this case, alignment can only be "left", "right", or "center". If you try to pass any other value, like "centre", TypeScript will give an error.

//Similarly we can do for numeric literal types.
// Ex:- function printnum(a:string,b:string):-1|0|1{
//     return a===b?0:a<b?-1:1;
// }


// ********************************************************************************************************

// 11. Literal Inference
// This topic is related to above topic (Literal Types).

// When you create an object in TypeScript, like this:

// const obj = { counter: 0 };
// TypeScript thinks, "Oh, this counter is a number. It could change to any number later." So, even though you start with 0, TypeScript assumes the type of counter is number, not specifically 0. That way, you can later change it, like this:

// obj.counter = 1;  // No error, because TypeScript knows `counter` is a number.

// The Problem with Literal Inference and Strings
// Now, let’s look at strings. Imagine you have this function:

// declare function handleRequest(url: string, method: "GET" | "POST"): void;
// This function expects method to be either "GET" or "POST" — no other strings.

// You create an object:

// const req = { url: "https://example.com", method: "GET" };
// Here’s where the issue comes in: TypeScript looks at req.method and says, "Hmm, this is a string. It starts as "GET", but it could be changed later to any string."

// So, when you try to do this:

// handleRequest(req.url, req.method);  --- // Error!
// TypeScript throws an error. It says, "Hey, req.method could be any string, but this function only accepts "GET" or "POST"."

// Fixing the Problem
// There are two ways to fix this.

// (a). The first way is to use Type Assertion,like this:
// const req={url:"https://example.com",methos:"GET" as "GET"}  -->  I am basically telling typescript that    method will be a string but only "GET"
                            // "OR"
// we can also do type assertion while calling the handleRequest function,like this:
// handleRequest(req.url, req.method as "GET");

// (b). The second way is to use "as const",this basically means that I am telling typescript that : This whole object should stay exactly as it is.
// const req={url:"https://example.com",methos:"GET"} as const;


// *********************************************************************************************************


// 12. null and undefined -->OOPs , sensitive topic

// See, Javascript already use two primitive values i.e "null" and "undefined" to signal absent or uninitialized value.
// So, In TypesScript we have two corresponding types of same name. Now you might be thinking that we have types of same name?? How do we use it ??
// Let me clear your doubt, yes, we have two types of same name , but How these types behave depends on whether you have the "strictNullChecks" option "on of off".

// (i)  strictNullChecks off
//     With strictNullChecks off, values that might be null or undefined can still be accessed normally, and the values null and undefined can be assigned to a property of any type. The lack of checking for these values tends to be a major source of bugs; therefore it is always recommended to turn strictNullChecks "on" if it’s practical to do so in the codebase.


// (ii) strictNullChecks on
//      With strictNullChecks on, when a value is null or undefined, you will need to test for those values before using methods or properties on that value. Therefore we "Narrow" it down to avoid any error.
// Wait , what is Narrowing down in Typescript??
// Let me tell you simply with an example:

// Let’s say you have a variable that could either be a string or null:

// let message: string | null = "Hello";  --> It means message can either be "Hello" or null.
// Since message can be null, TypeScript will give an error if you try to use it without checking if it's null. You need to narrow the type by checking first:

// if (message !== null) {
//   console.log(message.toUpperCase());  // This is safe, TypeScript knows it's not null here.
// }
// Here, message !== null narrows down the type from string | null to just string, so TypeScript knows it’s safe to use string methods like toUpperCase().

// In summary, narrowing is how you check if a value is not null or undefined (or other types) before using it, helping TypeScript understand that it’s safe to access methods or properties on that value.


// ************************************************************************************************************


//* 13. ENUMS --> Very Interesting
//     First of all, Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript , this means that, enums in TypeScript are a feature that doesn't exist in regular JavaScript. Unlike most TypeScript features, which are purely for type-checking and compile-time validation i.e( disappear after the TypeScript code is compiled into JavaScript), enums are actually added as a new feature by TypeScript and result in real code being generated when you compile your TypeScript.

//* (i) Numeric Enums 
//      Ex: enum Direction {
            // Up = 1,
            // Down,
            // Left,
            // Right,
            // }
            // Above, we have a numeric enum where Up is initialized with 1. All of the following members are auto-incremented from that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.
        
            // If we wanted, we could leave off the initializers entirely:

            // enum Direction {
            // Up,
            // Down,
            // Left,
            // Right,
            // }

            // Here, Up would have the value 0, Down would have 1, etc. This auto-incrementing behavior is useful for cases where we might not care about the member values themselves, but do care that each value is distinct from other values in the same enum.

    //*Q:- How to access Enums???

    // function move(direction: Direction) {
    //     switch (direction) {
    //       case Direction.Up:
    //         console.log("Moving up!");
    //         break;
    //       case Direction.Down:
    //         console.log("Moving down!");
    //         break;
    //       case Direction.Left:
    //         console.log("Moving left!");
    //         break;
    //       case Direction.Right:
    //         console.log("Moving right!");
    //         break;
    //     }
    //   }
      
    //   move(Direction.Left);  // Output: "Moving left!"


//* (ii) String Enums
// In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member" .It means that when you define an enum in TypeScript where the values are strings (called a string enum), each member must be given a value that is a constant string. This constant string can either be a string literal (like "Hello") or another value from the same enum.

//* Example of a String Enum:

// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT"
// }

//* Example of Using Another Enum Member:

// enum Status {
//   Active = "ACTIVE",
//   Inactive = "INACTIVE",
//   Pending = Active  // Initialized with another enum member
// }

//* NOTE: In modern Typescript, we can avoid using Enums because we have "as const" available.

// *********************************************************************************************************


//* 14. Narrowing
// 
