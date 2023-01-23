
function loadDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
           document.getElementById("contenu").innerHTML= this.responseText;    
       };
    };
    xhttp.open("GET","fichier.txt", true); 
    xhttp.send(); 
}

/*//Fonction simple

for(let i=1; i<=50; i+=1){
    if(i%3 ===0 && i%5 === 0){
        console.log('FizzBuzz');
    } else if (i%3 === 0){
        console.log('Fizz');
    } else if (i%5 === 0){
        console.log('Buzz');
    } else{
        console.log(i);
    }
}
*/

//Fonction modifiée

var res = document.getElementById("reslt");

function FizzBuzz(){
    var str = document.getElementById("contenu").textContent;
    var tab = str.split('\n');
    for(let i=0; i<= tab.length; i+=1){
        console.log(tab[i]);
    }
    console.log('start counting ');

    for(let i=0; i< tab.length; i++){
        
        if(tab[i]%3 ===0 && tab[i]%5 === 0){
            res.innerHTML +=  " FizzBuzz \n"  ;
            console.log('FizzBuzz');
        } else if (tab[i]%3 === 0){
            res.innerText +=" Fizz \n" ;
            console.log('Fizz');
        } else if (tab[i]%5 === 0){
            res.innerText +=" Buzz \n" ;
            console.log('Buzz');
        } else{
            res.innerText += tab[i]+ '\n'   ;
            console.log(tab[i]);
        }
    } 
}

