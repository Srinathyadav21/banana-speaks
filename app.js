var btntranslate = document.querySelector("#btn-translate")
var Txtinput = document.querySelector("#txt-input")

console.log(Txtinput)
function clickEventHandler(){
    console.log("clicked!") 
    console.log("input",Txtinput.value)

}
btntranslate.addEventListener("click",clickEventHandler)