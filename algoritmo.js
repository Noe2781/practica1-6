 let nombre = prompt ("¿COMO TE LLAMAS?");
 let numeroint = prompt ("Ingresa un numero entero");
 let booleano = prompt ("¿Es verdadero o falso?");
 let numerofloat = prompt ("Ingresa un numero con decimal");
 let letra = prompt ("Ingresa un caracter");
 let palabra = prompt ("Ingresa una palabra");
 

 console.log( nombre );
 document.querySelector("body").innerHTML = " <h1> " + "¿COMO TE LLAMAS?" + "</h1>";
 document.write("<h2> me llamo "+ nombre +"</h2>");
 document.write("<h3> Entero: "+ numeroint + "</h3>");
 document.write("<h4> Booleano " + booleano + "<H4/>");
 document.write("<h5> Decimal "+ numerofloat + "</h5>");
 document.write("<h6> Caracter "+ letra + "</h6>");
 document.write("<h6> Palabra " + palabra + "</h6>" );
