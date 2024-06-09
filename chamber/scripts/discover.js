let today = new Date();
const MILLIS_TO_DAY = 1000*60*60*24;
const LAST_VISIT = "last-visit"

function getMessage(){
    let lastvisit = localStorage.getItem(LAST_VISIT)    
    if (lastvisit == null){
        return "Welcome! Let us know if you have any questions."
    }
    lastvisit = parseInt(lastvisit)
    let datediff = today.getTime() - lastvisit
    if (datediff < MILLIS_TO_DAY){
        return "Back so soon! Awesome!"
    }
    if (datediff < MILLIS_TO_DAY * 2){
        return "You last visited 1 day ago."
    }
    let daysSinceLastVisit = Math.floor(datediff/MILLIS_TO_DAY)
    return `You last visited ${daysSinceLastVisit} days ago.`
}

let message = getMessage()
document.getElementById("welcome").innerText = message
localStorage.setItem(LAST_VISIT, `${today.getTime()}`)