// Arrow functions and call
const myObject = {};
const myFunction = () => {
    console.log(this === myObject);
};
myFunction();
myFunction.call(myObject);