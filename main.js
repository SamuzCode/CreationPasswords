//debemos declarar los numeros y para eso usamos el termino var
//y nos sirve para almacenar informacion , datos etc.
//y para darle sentido debemos poner un nombre de la variable al costado
//var --> tipo de variable, cantidad -->nombre de variable
// = declarar la informacion y 6 la informacion que almcacenara
//var cantidad =  6;
//usamos mas let para la escabilidades de codigo 
/*
let cantidad = 6;

let texto = "texto";
//usamos console.log para mardar mensajes ,etc en la consola al navegador
//usamos typeod para saber el tipo de dato
console.log(typeof texto);


//condicionales
if(cantidad <= 6){
    //usamos alert para que aparesca como un aviso en la pantalla
    //si se cumple la condicional
    alert("La cantidad de caracteres tiene que ser mayor de 6")
}

*/


//getElementById usamos para traer el valor que se usara
let cantidad = document.getElementById('cantidad');
//traemos tambien el boton para hacer la funcionalidad
let boton = document.getElementById('generar');

let contrasena  = document.getElementById('contrasena');
//usamos el const es una variable que es constante 
//siginifica que no cmabiara su valor 
const caracteres = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz123456789@?'

//preparamos la funcion
//y debemos ponerle su nombre
function generar(){

    //usamos parseint para cambiar de tipo a la variable para asegurar 
    //que sera tipo int
    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado)
    //aplicamos la
    if(numeroDigitado <= 6){
        alert("La cantidad de caracteres tiene que ser mayor de 6");
    
    }
    //usamos for para hacer un bucle
    //for (inicio,condicional de pause, el bucle)
    //iniciamos con 0 la condicional parar hasta que se menor que el numero
    //que coloquemos y su bucle seraque i sera sumado 1 en 1 o contador

    //inciomaos la varible vacia
    let password = '';

    for(let i= 0;i <numeroDigitado;i++ ){
        //que hara el for mientras hace el bucle
        //math.radom para generar un numero alateorio y de rango de 0 a 1
        //length nos permite jalar la logitud de contenido
        //floor para redonder el numero y evitar ejem: 1.35
        //caracteres [] sirve para atrear texto alateior de su coleccion
        //segun el numero de indice
        let caracterealateorio = caracteres[Math.floor(Math.random() * caracteres.length)];
        console.log(caracterealateorio);

        //agregamos la letra alateoria a la variable vacia
        password += caracterealateorio;
        
    }
    //ponemos la contraseña en la cajilla de texto
    contrasena.value = password;
}







