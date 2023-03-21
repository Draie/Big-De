
   /// ------------------------------CHARGEMENT DES AUTRES FICHIER JS-------------------------//////////////////
   function LoadScript(src){

    const script = document.createElement("script");
    script.src=src;
    document.head.prepend(script);
  }

  /*LoadScript("De_Tools.js")*/

  


///////// ------------------------------------ALERT DE BIENVENUE ----------------------------//////////////////////


let popstatus="visible";
let pop_up="";

   function WpopSet(){

    if (popstatus==="visible"){
      pop_up=document.getElementById("popContainer");
      pop_up.style.visibility="hidden";
      popstatus="hidden";
  
    }else if (popstatus==="hidden"){
      pop_up=document.getElementById("popContainer");
      pop_up.style.visibility="visible";
      popstatus="visible";
     
    }
    console.log(pop_up)
    console.log(popstatus)
    
   }

   ////////////-------------------------------------------------------------------------------//////////////////
   





  ////////////::-------------------------------------------------------------------------------///////////////////////:



