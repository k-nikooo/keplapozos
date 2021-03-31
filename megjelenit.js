window.addEventListener("load",init);

//segédgüggvények
function $(nev){
    return document.querySelectorAll(nev);
}

//var kepek = [];
//var kepCimek = [];

var index = 0;

var kep1 = {
    eleresiut:"kepek/1.jpg",
    cim:"1. képcím",
    leiras:"1. leírás"
};/*objektum, leírja egyetlen kép tulajdonságait*/

var kep2 = {
    eleresiut:"kepek/2.jpg",
    cim:"2. képcím",
    leiras:"3. leírás"
};

var kep3 = {
    eleresiut:"kepek/3.jpg",
    cim:"3. képcím",
    leiras:"3. leírás"
};

var kepTomb=[kep1, kep2, kep3];

function init(){
    for (var i = 0; i < kepTomb.length; i++) {
        var elem='<div><h3></h3><img id="'+i+'" src="" alt=""/><p></p></div>';
        $("article")[0].innerHTML += elem;
    }
    
    var kepElemTomb=$("article div img");
    var cimElemTomb=$("article div h3");
    var leirasElemTomb=$("article div p");
    console.log(kepTomb);
    
    for (var i = 0; i < kepElemTomb.length; i++) {
        //kepElemTomb[i].src=kepTomb[i]["eleresiut"];
        kepElemTomb[i].src=kepTomb[i].eleresiut;
        cimElemTomb[i].innerHTML=kepTomb[i].cim;
        leirasElemTomb[i].innerHTML=kepTomb[i].leiras;
//        kepElemTomb[i].src=kepek[i];
//        cimElemTomb[i].innerHTML=kepCimek[i];
    }   
    
    //kell egy kattintás eseménykezelő a kisképre
    for (var i = 0; i < kepElemTomb.length; i++) {
        kepElemTomb[i].addEventListener("click",kepCsere);
    }
    
    //ki kell cserélni a kattintott kép elérési útvonalára a nagykép elérése útvonalát
    
    $("#bal")[0].addEventListener("click",kepValtasBalra);
    $("#jobb")[0].addEventListener("click",kepValtasJobbra);
}

function kepCsere(){
    //itt cserélek képet
    var i = this.id;
    $("#nagykepTarolo img")[0].src=kepTomb[i].eleresiut;
    $("#nagykepTarolo h3")[0].innerHTML=kepTomb[i].cim;
    $("#nagykepTarolo p")[0].innerHTML=kepTomb[i].leiras;
}

function kepValtasBalra(){
    $("#nagykepTarolo img")[0].src=kepTomb[index].eleresiut;
    $("#nagykepTarolo h3")[0].innerHTML=kepTomb[index].cim;
    $("#nagykepTarolo p")[0].innerHTML=kepTomb[index].leiras;
    index--;
    if(index<0){
        index=kepTomb.length-1;
    }
}
function kepValtasJobbra(){
    $("#nagykepTarolo img")[0].src=kepTomb[index].eleresiut;
    $("#nagykepTarolo h3")[0].innerHTML=kepTomb[index].cim;
    $("#nagykepTarolo p")[0].innerHTML=kepTomb[index].leiras;
    index++;
    if(index>kepTomb.length-1){
        index=0;
    }
}

