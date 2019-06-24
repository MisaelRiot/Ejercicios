//funciones anidadas
var myObject = {
    myFunction: function(){
        
        console.log(this===myObject); //true
        
        setTimeout(function(){
            console.log(this === myObject);//false
            console.log(this === global);//false, but it's shown as true
                                        //it seems like node binds a Timeout object
        },0);
    }
};
myObject.myFunction();