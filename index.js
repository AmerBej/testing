var datum = new Date();
var dd = String(datum.getDate()).padStart(2, "0");
var mm = String(datum.getMonth() + 1).padStart(2, "0");
var yyyy = datum.getFullYear();



datum = dd + "." + mm + "." + yyyy;



window.onload = function(){
    test();
    function test(){
        document.getElementById("dynamicDate").innerHTML = datum;
    }
}


var plusButtonUp = document.getElementById("plusbuttonSieg");
var plusButtonDown = document.getElementById("minusbuttonSieg");
var minusButtonUp = document.getElementById("plusbuttonLoss");
var minusButtonDown = document.getElementById("minusbuttonLoss");


var nummerVariabel1 = document.getElementById("winsnumberDynamic");
var nummerVariabel2 = document.getElementById("lossesnumberDynamic");
var nummerVariabel3 = document.getElementById("mmrDynamic");


var u = document.getElementById("savedStats")
var r = document.getElementById("savedStats").parentNode

function insertAfter(referenceNode, newNode){
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
}



var winsNumber = 0;
var lossesNumber= 0;
var mmrNumber = 0;

var text = datum +"   "+ winsNumber +"w" + lossesNumber + "l " + mmrNumber +"mmr";

var list = []



let save = JSON.parse(localStorage.getItem("savedGames"))


if(save==null){
    abj={
        id: Math.floor(Math.random() * 1000),
        content: "dota 2 games"
    }
    list.push(abj)
    localStorage.setItem("savedGames", JSON.stringify(list))
}


save.forEach((e)=>{
    let divCreate = document.createElement("div")
    divCreate.classList.add("listedStats")
    divCreate.textContent = e.content
    insertAfter(u,divCreate)
})



plusButtonUp.addEventListener("click", function (){
    winsNumber+=1;
    nummerVariabel1.innerHTML = winsNumber;
    mmrNumber+=30;
    nummerVariabel3.innerHTML = mmrNumber;  
    text = datum +"   "+ winsNumber +"w   " + " "+ lossesNumber + "l " + mmrNumber +"mmr";
})

plusButtonDown.addEventListener("click", function (){
    winsNumber-=1;
    nummerVariabel1.innerHTML = winsNumber;
    mmrNumber-=30;
    nummerVariabel3.innerHTML = mmrNumber;
    text = datum +"   "+ winsNumber +"w   " + " " + lossesNumber + "l " + mmrNumber +"mmr";
})
minusButtonUp.addEventListener("click", function (){
    lossesNumber+=1;
    nummerVariabel2.innerHTML = lossesNumber;
    mmrNumber-=30;
    nummerVariabel3.innerHTML = mmrNumber;
    text = datum +"   "+ winsNumber +"w   " +" "+ lossesNumber + "l " + mmrNumber +"mmr";
})
minusButtonDown.addEventListener("click", function (){
    lossesNumber-=1;
    nummerVariabel2.innerHTML = lossesNumber;
    mmrNumber+=30;
    nummerVariabel3.innerHTML = mmrNumber;
    text = datum +"   "+ winsNumber +"w   " + " "+ lossesNumber + "l " + mmrNumber +"mmr";
})


var saveButtonVariabel = document.getElementById("saveButton");


 saveButtonVariabel.addEventListener("click",() =>{
    document.getElementById("savedStats").innerHTML = "Today: " + text;
    let obj = {
        id: datum,
        content: text
    }
    if(list.length>0){
        list.clear();
    }
    list.push(obj)
    localStorage.setItem("savedGames", JSON.stringify(list))
}) 