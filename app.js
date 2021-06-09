var btntranslate = document.querySelector("#btn-translate");
var Txtinput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL ="	https://api.funtranslations.com/translate/hodor.json"
function getTranslation(text) {
   return serverURL + "?" + "text=" + text
}

function clickEventHandler() {
   var inputText = Txtinput.value
   fetch(getTranslation(inputText))
      .then(response => response.json)
      .then(json => {
         var translatedText=json.contents.translated;
         outputDiv.innerText=translatedText;
      })
}
btntranslate.addEventListener("click", clickEventHandler)