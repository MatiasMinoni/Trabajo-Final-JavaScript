

class campeon { 
    constructor(nombre, vida, daño){
        this.nombre = nombre;
        this.vida = parseInt(vida);
        this.daño = parseInt(daño);
    }
}

const campeones= [];
campeones.push(new campeon("ekko", 100, 10));
campeones.push(new campeon("illaoi", 100, 10));
campeones.push(new campeon("akali", 100, 10));
campeones.push(new campeon("akshan", 100, 10));
campeones.push(new campeon("alistar", 100, 10));
campeones.push(new campeon("amumu", 100, 10));
campeones.push(new campeon("anivia", 100, 10));
campeones.push(new campeon("annie", 100, 10));
campeones.push(new campeon("aphelios", 100, 10));
campeones.push(new campeon("ashe", 100, 10));
campeones.push(new campeon("asol", 100, 10));
campeones.push(new campeon("azir", 100, 10));

var parry=parseInt(0);
// Ekko vs illaoi
var ataque=document.getElementById("attack_ekko");
ataque.addEventListener("click", function(){
    ataque=(campeones[1].vida - campeones[0].daño);

    attack_ekko.disabled=true;
    parry_ekko.disabled=true;
    heal_ekko.disabled=true;
    attack_illaoi.disabled=false;
    parry_illaoi.disabled=false;
    heal_illaoi.disabled=false;
parry=20;
    while(campeones[1].vida>0){
        campeones[1].vida=ataque;
        if (ataque<=0){
            campeones[1].vida===0;
            swal.fire("Ganaste");
            swal.fire(campeones[1].vida);
      
            break;
        }
      break

      }
        if(campeones[1].vida<=0){
            console.log("Ganaste");
         
        }
    swal.fire("La vida de " + campeones[1].nombre + " es " + campeones[1].vida);
    attack_ekko.disabled=true;
    attack_illaoi.disabled=false

});



        var curar=document.getElementById("heal_ekko");
        curar.addEventListener("click", function(){
            curar=(campeones[0].vida + 10);

            attack_ekko.disabled=true;
            parry_ekko.disabled=true;
            heal_ekko.disabled=true;
            attack_illaoi.disabled=false;
            parry_illaoi.disabled=false;
            heal_illaoi.disabled=false;
            parry=0;

            while (campeones[0].vida<100){
                campeones[0].vida=curar;
             swal.fire("La vida de " + campeones[0].nombre + " es " + campeones[0].vida);
                break;
            }   
            if(campeones[0].vida===100){
              swal.fire("Tu vida esta completa",
             "La vida de " + campeones[0].nombre + " es " + campeones[0].vida);
        
                }});
            
        
                var contraatacar=document.getElementById("parry_ekko");
                contraatacar.addEventListener("click", function(){
                    var contraatacar=(campeones[1].vida - parry)
          
                    while(campeones[1].vida>0){
                        campeones[1].vida=contraatacar;
                      
                            attack_illaoi.disabled=false;
                        parry_illaoi.disabled=false;
                        heal_illaoi.disabled=false;
                        attack_ekko.disabled=true;
                        parry_ekko.disabled=true;
                        heal_ekko.disabled=true;
                 
                      
                        
                              
                                 if (parry<=0){
                                     parry=20;
                                     swal.fire("No puedes contraatacar");
                                     break;
                                 } 
                           else(parry=20);
                           swal.fire('La vida de ' + campeones[1].nombre + ' es ' + campeones[1].vida);
                           break;
                            }});
                    

                    
    
        


// --------------------------------------------------------------------------------------------------------------


// Illaoi vs Ekko
var ataque=document.getElementById("attack_illaoi");
ataque.addEventListener("click", function(){
    ataque=(campeones[0].vida - campeones[1].daño);

    attack_illaoi.disabled=true;
    parry_illaoi.disabled=true;
    heal_illaoi.disabled=true;
    attack_ekko.disabled=false;
    parry_ekko.disabled=false;
    heal_ekko.disabled=false;
    parry=20;
    while(campeones[0].vida>0){
        campeones[0].vida=ataque;
        if (ataque<=0){
            campeones[0].vida=0;
            swal.fire("Ganaste");
        
            break;
        }
      break
      }
        if(campeones[0].vida<=0){
            swal.fire("Ganaste");
           
        }
    swal.fire("La vida de " + campeones[0].nombre + " es "+ campeones[0].vida);
    attack_illaoi.disabled=true;
    attack_ekko.disabled=false;
});



var curar=document.getElementById("heal_illaoi");
curar.addEventListener("click", function(){
    curar=(campeones[1].vida + 10);
    parry=0;
    attack_illaoi.disabled=true;
    parry_illaoi.disabled=true;
    heal_illaoi.disabled=true;
    attack_ekko.disabled=false;
    parry_ekko.disabled=false;
    heal_ekko.disabled=false;
    while (campeones[1].vida<100){
        campeones[1].vida=curar;
        swal.fire("La vida de " + campeones[1].nombre + " es " + campeones[1].vida);
        break;
    }   
    if(campeones[1].vida===100){
     
      swal.fire("Tu vida esta completa",
      "La vida de " + campeones[1].nombre + " es " + campeones[1].vida
      );
        }});

        var contraatacar=document.getElementById("parry_illaoi");
        contraatacar.addEventListener("click", function(){
            var contraatacar=(campeones[0].vida - parry)
          
            while(campeones[0].vida>0){
                campeones[0].vida=contraatacar;
              
                    attack_illaoi.disabled=true;
                parry_illaoi.disabled=true;
                heal_illaoi.disabled=true;
                attack_ekko.disabled=false;
                parry_ekko.disabled=false;
                heal_ekko.disabled=false;
         
             
                      
                         if (parry<=0){
                             parry=20;
                             swal.fire("No puedes contraatacar");
                             break;
                         }
                   else(parry=20);
                   swal.fire('La vida de ' + campeones[0].nombre + ' es ' + campeones[0].vida);
                   break;
                    }});
            

       function agregarElementos(){
var lista=document.getElementById("ulListado"); 
fetch("campeonesss.json")
.then((campeonesss)=>campeonesss.json())

    .then(campeonesss.json).forEach(function(campeonesss){
var linew= document.createElement("ul" ); 
linew=document.createElement("li");
var contenido = document.createTextNode(+" "+campeonesss.vida+" "+campeonesss.ataque+" "+campeonesss.Q+" "+campeonesss.W+" "+campeonesss.E+" "+campeonesss.R );
    
var img = document.createElement("img");
var boton = document.createElement("a");
boton.innerHTML = "Seleccionar ";
boton.setAttribute("class", "añadir waves-effect waves-light btn", "href")

img.src=campeonesss.iconURL; 
img.name=campeonesss.campeon; 
lista.appendChild(linew);
linew.appendChild(img);
linew.appendChild(boton)
linew.appendChild(contenido);


    });
agregarElementos();


var pickchamp = document.getElementsByClassName('añadir');
for (var i = 0; i < pickchamp.length; i++) {
pickchamp[i].addEventListener('click', printDetails);
}

function printDetails(h) {
console.log(h.target.parentNode.childNodes[0].name);

}

       }    