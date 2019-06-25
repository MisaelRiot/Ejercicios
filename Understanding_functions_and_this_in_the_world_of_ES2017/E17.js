// arrow function class field (future)
class MyClass{
    myFunction = () => {
        console.log(this instanceof Myclass);
    };
}
const myInstance = new MyClass();
const myFunction = myInstance.myFunction;
myFunction();