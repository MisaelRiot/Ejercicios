//arrow functions
const myFunction = () => {
    console.log(this === global);
}
myFunction();//prints false, but the video says it prints true
// user$ node --version
// v10.16.0
