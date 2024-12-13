// Stack (Primitive Types), Heap(Non-Primitive Types)

// Stack -> Saves the copy of the value
let myYoutubeName = "Vkviraj";

let anotherName = myYoutubeName;
anotherName = "vkamvs";

console.log(myYoutubeName); // Returns Vkviraj
console.log(anotherName); // Returns vkamvs

// Heap -> Saves the reference of the value
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
};

let userTwo = userOne;

userTwo.email = "vkviraj@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
