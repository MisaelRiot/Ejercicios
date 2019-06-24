var fs = require("fs");
file1='file.txt';
file2='file.txt';
file3='file.txt';

getTotalFileSize(file1, file2, file3, funcionDeCallback);
getTotalFileSize2(file1, file2, file3, funcionDeCallback);
/**
 * Description. Suma el tamaño de 3 archivos.
 * @param {string} file1           Nombre del primer archivo.
 * @param {string} file2           Nombre del segundo archivo.
 * @param {string} file3           Nombre del tercer archivo.
 * @param {function}           callback Funcion que hará el callback.
 */
function getTotalFileSize(file1, file2, file3, callback) {
    let total = 0;
    fs.stat(file1, (e,info)=>{
        total += info.size;
        fs.stat(file2, (e,info)=>{
            total += info.size;
            fs.stat(file3, (e,info)=>{
                total += info.size;
                callback(total, getTotalFileSize.name);
            });    
        });
    });
}

/**
 * Description. Imprime en consola el tamaño total de los archivos y la funcion que hizo la operación.
 * @param {string} algo           Nombre del primer archivo.
 * @param {string} funcion           Nombre del segundo archivo.
 */
function funcionDeCallback(algo, funcion){
    console.log(algo + ' llamado por: ' + funcion);
}

/**
 * Description. Suma el tamaño de 3 archivos usando un foreach.
 * @param {string} file1           Nombre del primer archivo.
 * @param {string} file2           Nombre del segundo archivo.
 * @param {string} file3           Nombre del tercer archivo.
 * @param {function}           callback Funcion que hará el callback.
 */
function getTotalFileSize2(file1, file2, file3, callback) {
    let total = 0;
    let numFinished = 0;
    [file1, file2, file3].forEach((file) =>{
        fs.stat(file, (e,info)=>{
            total += info.size;
            numFinished +=1;
            if (numFinished === 3) {
                callback(total, getTotalFileSize2.name);
            }
        });
    });
    
}