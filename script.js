let inputText = document.getElementById("text")
let inputSub = document.getElementById("sub")
let main = document.getElementById("main")

let checkbox = document.getElementById("checkbox")

function FnTargetValue() {
    if(inputText.value != ""){
        if(checkbox.checked == true){
            let div = document.createElement("div")
            let p = document.createElement("p")
            let TargetValue = document.createTextNode(inputText.value)
        
            div.classList.add("youChat")
            p.appendChild(TargetValue)
            div.appendChild(p)
        
             main.appendChild(div)
             inputText.value = "" 
        }
        else{
            let div = document.createElement("div")
            let p = document.createElement("p")
            let TargetValue = document.createTextNode(inputText.value)
        
            div.classList.add("myChat")
            p.appendChild(TargetValue)
            div.appendChild(p)
        
             main.appendChild(div)
             inputText.value = "" 
        }
    }
}



inputSub.addEventListener("click",FnTargetValue)
