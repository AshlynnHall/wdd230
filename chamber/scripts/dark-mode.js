const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (main.classList.contains("light-mode")) {
        main.classList.remove("light-mode");
        main.classList.add("dark-mode");
        modeButton.textContent = "🔆";
    } else {
        main.classList.remove("dark-mode");
        main.classList.add("light-mode");
        modeButton.textContent = "🕶️";
    }
});


// let darkbutton = document.getElementById("dark-mode")
// darkbutton.addEventListener("click", () =>{    
//     darkbutton.classList.toggle("dark")
//     if (darkbutton.classList.contains("dark")){
//         document.documentElement.style.setProperty('white');        
//         document.documentElement.style.setProperty('black');        
//         document.documentElement.style.setProperty('#1f1f1d');    
//         document.documentElement.style.setProperty('#588157');        
//         document.documentElement.style.setProperty('#3A5A40');    
//         document.documentElement.style.setProperty('#1e2f21');                
//     }
//     else{
//         document.documentElement.style.setProperty('black');        
//         document.documentElement.style.setProperty('white');        
//         document.documentElement.style.setProperty('#DAD7CD');    
//         document.documentElement.style.setProperty('#A3B18A');        
//         document.documentElement.style.setProperty('#588157');    
//         document.documentElement.style.setProperty('#3A5A40');                
//     }

// })