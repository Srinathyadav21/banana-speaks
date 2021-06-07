var btntranslate = document.querySelector("#btn-translate");
var Txtinput = document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
// outputDiv.innerText="srinath yadav"
function clickEventHandler(){
   outputDiv.innerText="dkncksjc " + Txtinput.value
    

}
btntranslate.addEventListener("click",clickEventHandler)