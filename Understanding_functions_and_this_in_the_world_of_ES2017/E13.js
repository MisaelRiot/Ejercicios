const myObject = {
    myFunction(){
        console.log(this===myObject);
        setTimeout(()=>{
            console.log(this===myObject);
            console.log(this===global);
        },0);
    }
};
myObject.myFunction();
