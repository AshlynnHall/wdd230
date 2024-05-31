let darkbutton = document.getElementById("dark-mode")
darkbutton.addEventListener("click", () =>{    
    darkbutton.classList.toggle("dark")
    if (darkbutton.classList.contains("dark")){
        document.documentElement.style.setProperty('white');        
        document.documentElement.style.setProperty('black');        
        document.documentElement.style.setProperty('#1f1f1d');    
        document.documentElement.style.setProperty('#588157');        
        document.documentElement.style.setProperty('#3A5A40');    
        document.documentElement.style.setProperty('#1e2f21');                
    }
    else{
        document.documentElement.style.setProperty('black');        
        document.documentElement.style.setProperty('white');        
        document.documentElement.style.setProperty('#DAD7CD');    
        document.documentElement.style.setProperty('#A3B18A');        
        document.documentElement.style.setProperty('#588157');    
        document.documentElement.style.setProperty('#3A5A40');                
    }

})