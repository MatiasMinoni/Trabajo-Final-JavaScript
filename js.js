

fetch('campeones.json')
    .then(res => res.json())
    .then(datos => {    
        console.log(datos);

        var div_main = document.createElement("fieldset");
        // Boton seleccionar
        // var select = document.createElement("a");
        // var select_ = document.createTextNode("Seleccionar");
        // select.setAttribute("class", "select waves-effect waves-light btn col offset-s5");
    
  
        for(var i of datos){
            var nombre=(i.campeon);
            var iconos=(i.iconURL)   
           var ataque=(i.ataque);
              var vida=(i.vida);

   var id=(i.id)
   
            var div_champ = document.createElement("div");
            var a_champ = document.createElement("button");
            var nombres = document.createElement("h4");
            var iconos = document.createElement("img");

    // Crear nodo de tipo Text

    var titulo = document.createTextNode(nombre);


    var iconos_ = document.createTextNode("");

    iconos.src=i.iconURL;
// Atributos
div_main.setAttribute("class","row" );
div_champ.setAttribute("class","col s2 " );
a_champ.setAttribute("class", "hitbox" );
a_champ.setAttribute("id", id);
a_champ.setAttribute("name", nombre );
a_champ.setAttribute("data-ataque", ataque );
a_champ.setAttribute("data-vida", vida );
    // Añadir el nodo Text como hijo del nodo tipo Element
    nombres.appendChild(titulo);
    iconos.appendChild(iconos_);
// select.appendChild(select_);

        
    // Añadir el nodo Element como hijo de la pagina
    document.body.appendChild(div_main);
  
    div_main.appendChild(div_champ);

    a_champ.appendChild(nombres);
    a_champ.appendChild(iconos);
    div_champ.appendChild(a_champ);
    
    // div_main.appendChild(select);

//   ---------------------------------------------------------------
        // Funciones
        a_champ.addEventListener("click", function(){
            
            var id = this.id;
            //  console.log(id);
            var x = Math.floor(Math.random()*12);

            var nombre_a = this.name;
            var nombre_b = datos[x].campeon; 
            var imagen_a= this.children[1].src;
            var imagen_b=datos[x].iconURL ;
            var vida_a= this.dataset.vida;
            var ataque_a= this.dataset.ataque;
            var vida_b= datos[x].vida;
            var ataque_b= datos[x].ataque;

        div_main.style.display = "none";

// ---------------------------------------------------------------
        // createElement

        var nuevo_pvp = document.createElement("fieldset");
        var champ_azul = document.createElement("div");
        var champ_rojo = document.createElement("div");
        var titulo_rojo = document.createElement("h4");
        var titulo_azul = document.createElement("h4");
        var attack_azul = document.createElement("button");
        var attack_rojo = document.createElement("button");
        var parry_azul = document.createElement("button");
        var parry_rojo = document.createElement("button");
        var heal_azul = document.createElement("button");
        var heal_rojo = document.createElement("button");
        var img_rojo = document.createElement("img");
          var img_azul = document.createElement("img");
        
          attack_azul_=document.createTextNode("Atacar");
          attack_rojo_=document.createTextNode("Atacar");
          parry_azul_=document.createTextNode("Parar");
          parry_rojo_=document.createTextNode("Parar");
          heal_azul_=document.createTextNode("Curar");
          heal_rojo_=document.createTextNode("Curar");  

// ---------------------------------------------------------------
        //   appendChild
          document.body.appendChild(nuevo_pvp);
          nuevo_pvp.appendChild(champ_azul);
          nuevo_pvp.appendChild(champ_rojo);
            champ_azul.appendChild(titulo_azul);
            champ_rojo.appendChild(titulo_rojo);
            champ_azul.appendChild(img_azul);
            champ_rojo.appendChild(img_rojo);
              champ_azul.appendChild(attack_azul);
              champ_azul.appendChild(parry_azul);
              champ_azul.appendChild(heal_azul);
              champ_rojo.appendChild(attack_rojo);
              champ_rojo.appendChild(parry_rojo);
              champ_rojo.appendChild(heal_rojo);
       


              
attack_azul.appendChild(attack_azul_)
attack_rojo.appendChild(attack_rojo_)
parry_azul.appendChild(parry_azul_)
parry_rojo.appendChild(parry_rojo_)
heal_azul.appendChild(heal_azul_)
heal_rojo.appendChild(heal_rojo_)

// ---------------------------------------------------------------------------------
// Atribute
    nuevo_pvp.setAttribute("class", "row");
    champ_azul.setAttribute("class", "col s3");
    img_azul.setAttribute("class", "icono");
    champ_rojo.setAttribute("class", "col s3");
    img_rojo.setAttribute("class", "icono");

    champ_azul.setAttribute("id", "campeon_azul");


    champ_rojo.setAttribute("id", "campeon_azul");

attack_azul.setAttribute("id", "attack_azul");
attack_azul.setAttribute("class", "waves-effect waves-light btn");
attack_rojo.setAttribute("id", "attack_rojo");
attack_rojo.setAttribute("class", "waves-effect waves-light btn");
    parry_azul.setAttribute("id", "parry_azul");
    parry_azul.setAttribute("class", "waves-effect waves-light btn");
    parry_rojo.setAttribute("id", "parry_rojo");
    parry_rojo.setAttribute("class", "waves-effect waves-light btn");
    heal_azul.setAttribute("id", "heal_azul");
    heal_azul.setAttribute("class", "waves-effect waves-light btn");
    heal_rojo.setAttribute("id", "heal_rojo");
    heal_rojo.setAttribute("class", "waves-effect waves-light btn");


    // Getelement
    attack_azul=document.getElementById("attack_azul");
    
    attack_rojo=document.getElementById("attack_rojo");
    // parry_azul=document.getElementById("parry_azul");
    // parry_rojo=document.getElementById("parry_rojo");
    heal_azul=document.getElementById("heal_azul");
    heal_rojo=document.getElementById("heal_rojo");
    // titulo_azul=document.getElementById("titulo_azul");
    // titulo_rojo=document.getElementById("titulo_rojo");
    // img_azul=document.getElementById("img_azul");
    // img_rojo=document.getElementById("img_rojo");

    var parry=parseInt(0);

attack_azul.addEventListener("click", function(){
       
        // attack_azul=(vida_b-ataque_a)


        attack_azul.disabled=true;
    parry_azul.disabled=true;
    heal_azul.disabled=true;
    attack_rojo.disabled=false;
    parry_rojo.disabled=false;
    heal_rojo.disabled=false;
    parry=20;
    
        while(vida_b>0){
            vida_b=vida_b-ataque_a
swal.fire("La vida de "+nombre_b+" es: "+vida_b)            
            break
            
        }
        if(vida_b<=0){
            swal.fire("Ganaste")
            setTimeout('document.location.reload()',3000);

        }
                })
       
// parry_azul.addEventListener("click", function(){
// var parry_azul=(vida_b - parry)
//         parry_azul.disabled=true;
//         attack_azul.disabled=false;
//         attack_rojo.disabled=false;
//         heal_azul.disabled=false;
//         heal_rojo.disabled=false;
//         parry=0
//         while(vida_b>0){
// vida_b=parry_azul
// console.log(vida_b)
// console.log(parry)
// break
//         }
//     })
heal_azul.addEventListener("click", function(){
              heal_azul.disabled=true;
              heal_rojo.disabled=false;
              attack_azul.disabled=true;
              attack_rojo.disabled=false;
              parry_azul.disabled=true;
              parry_rojo.disabled=false;
              parry=0;
              while(vida_a<100){
            vida_a=(vida_a+ 10)
            swal.fire("Te Curaste 10 de vida",
            "La vida de " + nombre_a + " es de " + vida_a,)
            
            break
            
        }
              if (vida_a===100){
            swal.fire("Tu vida esta completa",
            "La vida de " + nombre_a + " es de " + vida_a,)

        }})
    
    
        var contraatacar=document.getElementById("parry_azul");
        contraatacar.addEventListener("click", function(){
            var contraatacar=(vida_b - parry)
            parry=0
            attack_azul.disabled=true;
            attack_rojo.disabled=false;
            heal_azul.disabled=true;
            heal_rojo.disabled=false;
            parry_azul.disabled=true;
            parry_rojo.disabled=false;
            while(vida_b>0){
                vida_b=contraatacar
                swal.fire("Contraatacaste a " + nombre_b + " su vida es de " + vida_b)
                
                break
                
            }
            if(vida_b<=0){
                swal.fire("Ganaste",
                "La vida de " + nombre_b + " es de " + vida_b)
                setTimeout('document.location.reload()',3000);
            }
        })
        var contraatacar=document.getElementById("parry_rojo");
        contraatacar.addEventListener("click", function(){
            var contraatacar=(vida_a - parry)
            parry=0
            attack_azul.disabled=false;
            attack_rojo.disabled=true;
            heal_azul.disabled=false;
            heal_rojo.disabled=true;
            parry_azul.disabled=false;
            parry_rojo.disabled=true;
            while(vida_a>0){
                vida_a=contraatacar
                swal.fire("Contraatacaste a " + nombre_a + " su vida es de " + vida_a)

                
                break
                
            }
            if (vida_a<=0){
                swal.fire("Ganaste",
                "La vida de " + nombre_a + " es de " + vida_a)
                setTimeout('document.location.reload()',3000);
            }                       

        })
        
        
attack_rojo.addEventListener("click", function(){
                    
    
                    // attack_rojo=(vida_a-ataque_b)
                   
    
                attack_azul.disabled=false;
                parry_azul.disabled=false;
                heal_azul.disabled=false;
                attack_rojo.disabled=true;
                parry_rojo.disabled=true;
                heal_rojo.disabled=true;
                    parry=20
                    while(vida_a>0){
                        vida_a=vida_a-ataque_b
                        swal.fire("La vida de "+nombre_a+" es: "+vida_a)            
                        
                        break
                        
                    }
                    if(vida_a<=0){
                        swal.fire("Ganaste")
                        setTimeout('document.location.reload()',3000);

                    }
                            })

// parry_rojo.addEventListener("click", function(){

//     parry_rojo.disabled=true;
//     parry_azul.disabled=false;
//     attack_azul.disabled=false;
//     attack_rojo.disabled=true;
//     heal_azul.disabled=false;
//     heal_rojo.disabled=true;
//                   var parry_rojo() 
//     parry=0;
                  
                    
//                     while(vida_a>0){
//                         vida_a=(vida_a - parry)
                        
//             vida_a=parry_rojo
//             console.log(vida_a)
//             console.log(parry)
//             break
//                     }
//                 })
                    
                
heal_rojo.addEventListener("click", function(){
             
                    heal_rojo.disabled=true;
                    attack_azul.disabled=false;
                    attack_rojo.disabled=true;
                    parry_azul.disabled=false;
                    parry_rojo.disabled=true;
                    heal_azul.disabled=false;
                    parry=0;
                  
                    while(vida_b<100){
                        vida_b=(vida_b+ 10)
                        swal.fire("Te Curaste 10 de vida",
                        "La vida de " + nombre_b + " es de " + vida_b)
                        
                        break
                        
                    }
                    if (vida_b===100){
                        swal.fire("Tu vida esta completa",
                        "La vida de " + nombre_b + " es de " + vida_b)
            
                    }})
                

// ---------------------------------------------------------------------------------
    titulo_azul.innerHTML = nombre_a;    
    
    titulo_rojo.innerHTML = nombre_b;
    img_azul.src= imagen_a
    img_rojo.src= imagen_b

    

        }
        );

       
        
        }
    }
    );


 
