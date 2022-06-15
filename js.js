

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
a_champ.setAttribute("class", "hitbox");
a_champ.setAttribute("id", id);
a_champ.setAttribute("name", nombre);

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

     function anashe(){
       var nuevo_pvp = document.createElement("fieldset");
       var champ_azul = document.createElement("div");
       var champ_rojo = document.createElement("div");
       var titulo_rojo = document.createElement("h4");
         var titulo_azul = document.createElement("h4");
       var img_rojo = document.createElement("img");
         var img_azul = document.createElement("img");
        
       document.body.appendChild(nuevo_pvp);
       nuevo_pvp.appendChild(champ_azul);
       nuevo_pvp.appendChild(champ_rojo);
         champ_azul.appendChild(titulo_azul);
         champ_rojo.appendChild(titulo_rojo);
         champ_azul.appendChild(img_azul);
         champ_rojo.appendChild(img_rojo);
         champ_azul= nombre_a;

     }

        // Funciones
        a_champ.addEventListener("click", function(){
            var id = this.id;
            console.log(id);
            var nombre_a = this.name;
            console.log(nombre_a);
            alert("Has seleccionado: " + nombre_a);
        div_main.style.display = "none";
            anashe()
        }
        );
        
        }
    }
    );