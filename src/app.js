var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#text-input');
var outputDiv = document.querySelector('#output');

var serverURL = "https://api.funtranslations.com/translate/minion.json"
	

function getTranslationUrl(text){
    return serverURL+ "?" + "text=" + text

}

//show error or defining error 
function errorHandler(error){
    console.log("error occured", error)
    alert("something wrong with server try after sometime");
}
//defined clickhandler 
function clickHandler() { 
var inputText = txtInput.value;// taking input

    //calling server for processing
    fetch(getTranslationUrl(inputText))
    //convert to response to response.json
    .then(response => response.json())
    //take json and show translated text
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)

};

btnTranslate.addEventListener("click", clickHandler);