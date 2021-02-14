    let whotest = prompt("Ingrese un valor");

function generador() {
    let who = ['El perro', 'Mi abuela', 'Mi tortuga', 'Mi canario', 'Mi gato'];
    //who.push(whotest);
    //who.shift(whotest);
    
    let what = ['se comió', 'aplastó', 'robó', 'rompió', 'ensució'];
    let when = ['antes de clases', 'justo cuando terminé', 'mientras almorzaba', 'mientras yo rezaba'];

    let message = who[Math.floor((Math.random() * who.length) + 0)] + " "  +
        what[Math.floor((Math.random() * what.length) + 0)] + " " + 
        when[Math.floor((Math.random() * when.length) + 0)];

    return  document.getElementById("excuse").innerHTML = message;    
        }

