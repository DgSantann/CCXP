const ingressos = [];

function highLightCard(selector)
{
    var element = document.querySelector(selector);
    element.classList.toggle("card-higlight");

}

function checkKeyboardCode(){

     document.addEventListener("Keydown", (event) => {
        var name = event.key;
        var code = event.code;
        // Alert the name and key code on Keydonw
        alert(`tecla Pressionada ${name} \r\n key code value: ${code}`);
     }, false);
    
}

function addkeyboardEventListeners()
{
    document.addEventListener("Keydown",(event) => {
        var ingresso1 = document.getElementById("qui");
        var ingresso2 = document.getElementById("sex");
        var ingresso3 = document.getElementById("esg");
        var ingresso4 = document.getElementById("domi");

        var code = event.code;
        if(code == "digit1") {
            ingresso1.classList.toggle("card-higlight");
            ingresso2.classList.remove("card-higlight");
            ingresso3.classList.remove("card-higlight");
            ingresso4.classList.remove("card-higlight");
        }

        if(code == "digit2") {
            ingresso1.classList.remove("card-higlight");
            ingresso2.classList.toggle("card-higlight");
            ingresso3.classList.remove("card-higlight");
            ingresso4.classList.remove("card-higlight");  
        }

        if(code == "digit3") {
            ingresso1.classList.remove("card-higlight");
            ingresso2.classList.remove("card-higlight");
            ingresso3.classList.toggle("card-higlight");
            ingresso4.classList.remove("card-higlight"); 
        } 

            if(code == "digit4") {
                ingresso1.classList.remove("card-higlight");
                ingresso2.classList.remove("card-higlight");
                ingresso3.classList.remove("card-higlight");
                ingresso4.classList.toggle("card-higlight"); 
    } 
        
    }, false); 
       
}

selectCard = (selector) =>
{
    var element = document.querySelector(selector);
    element.classList.toggle("cardselected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}
showSelectedCards = () =>
{
    if(ingressos.length > 0) alert("Ingressos Selecionados:" + ingressos); 
}

addkeyboardEventListeners();