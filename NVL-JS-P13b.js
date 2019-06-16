
    function palindromo(){
        var frase = prompt("Escribe una palabra para saber si es un Palíndromo!");
        // un palidromo es una palabra que al voltearla se lee igual
        // convertir la variable frase en un array
        // y separar por letras
        var espacios = frase.split("");
        console.log(espacios);
        // aca en la variable espacios tengo metido la palabra en un array
        var invertir = frase.split("").reverse();
        var espacios = espacios.toString();
        var invertir = invertir.toString();
        console.log(invertir);
        
        if(espacios == invertir){
            alert('Esto es un Palindromo!');
            
        }else{
            alert('Esto no es un Palindromo');
        }
    }

palindromo();
    