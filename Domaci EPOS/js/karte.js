

function uzmiPodatke(){

polaziste = document.getElementById('polaziste');
polaziste = polaziste.value;
odrediste = document.getElementById('odrediste');
odrediste = odrediste.value;
datum = document.getElementById('datum');
datum = datum.value;
popust = document.getElementsByName('popust');
vreme = document.getElementById('vreme');
vreme = vreme.value;
var vrednostPopusta;
for(var i =0; i<popust.length; i++){
    if(popust[i].checked){
        vrednostPopusta = popust[i].value;
    }
}
var smer = document.getElementsByName('smer');
var vrednostSmera;
for(var i =0; i<smer.length; i++){
    if(smer[i].checked){
        vrednostSmera = smer[i].value;
    }
}


return{
    polaziste1: polaziste,
    odrediste1: odrediste,
    datum1: datum,
    vreme1: vreme,
    popust1: vrednostPopusta,
    smer1: vrednostSmera
}

}


function proveri( podaci ){
    var voznja = podaci;

    if(voznja.polaziste1 == "mesto"){
        alert("Nije izabrano polaziste");
        return false;}
        if(voznja.odrediste1=="mesto"){
        alert("Nije izabrano odrediste");
        return false;}
    if(voznja.polaziste1 === voznja.odrediste1){
        alert("Polaziste i odrediste su isti");
        return false;
    }
    if(voznja.vreme1 == "vremePolaska"){
        alert("Nije izabrano vreme polaska");
        return false;
    }
    
    datumSplit = voznja.datum1.split('-');
    
    if(!datumSplit[0] || !datumSplit[1] || !datumSplit[2] || datumSplit[0]<1 || datumSplit[0]>31 || datumSplit[1]<1 || datumSplit[1]>12 || datumSplit[2]<2019){
        alert("Datum nije unesen u pravilnom formatu");
        return false;
    }
    return true;

}

function kupovina(){
    voznja = uzmiPodatke();
    if(proveri(voznja)){
         cena = odrediCenu(voznja);
         $("#cena").replaceWith('<h3 id  = "cena" >Cena: ' + cena + '</h3>');
        $("#cena").show();
        $("#potvrda").replaceWith('<p>Polaziste: ' + voznja.polaziste1  + '</p>' +
        '<p>Odrediste :' + voznja.odrediste1  + '</p>' +
        '<p>Datum: ' + voznja.datum1 + '</p>' +
        '<p>Vreme: ' + voznja.vreme1 + '</p>' +
         '<p>Cena: ' + cena + '<br>' );
        $("#potvrdaKarte").show();
    }
}

function odrediCenu(podaci){
var voznja = podaci;
var cena = 0;
if(voznja.polaziste1 == "Beograd"){
    switch (voznja.odrediste1){
        case "Nis":
            cena = 1000;
            break;
        case "Novi Sad":
             cena = 600;
            break;
        default:
            cena = 0;
    }
}

if(voznja.polaziste1 == "Nis"){
    switch (voznja.odrediste1){
        case "Beograd":
            cena = 1000;
            break;
        case "Novi Sad":
             cena = 1400;
            break;
            default:
            cena = 0;
    }
}
    if(voznja.polaziste1 == "Novi Sad"){
        switch (voznja.odrediste1){
            case "Beograd":
                cena = 600;
                break;
            case "Nis":
                 cena = 1400;
                break;
                default:
                cena = 0;
        }
    
    }

    
    if(voznja.smer1=="2smera")
    cena = (cena+cena)*0.8;

    if(voznja.popust1 != "bez popusta")
    cena = cena*0.9;

    return cena;
}

function kupiKartu(){
     dugmeKupi = document.getElementById('kupiKartu');
    dugmeKupi.addEventListener('click', kupovina);
    
     
}

function odrediVreme(){
    var trenutnoVreme = new Date();
    var datumInfo = ("Datum: " + trenutnoVreme.getDate() + "." +(trenutnoVreme.getMonth()+1)+"."+trenutnoVreme.getFullYear());
   
   
    var sekunde =  trenutnoVreme.getSeconds();
   
    var sati =   trenutnoVreme.getHours();
  
    var minuti = trenutnoVreme.getMinutes();

    if(trenutnoVreme.getSeconds()<10)
     sekunde = "0" + trenutnoVreme.getSeconds();
    if(trenutnoVreme.getHours()<10)
    sati = "0" + trenutnoVreme.getHours();
    if(trenutnoVreme.getMinutes()<10)
     minuti = "0" + trenutnoVreme.getMinutes();
     var vremeInfo = ("Vreme: " + sati + ":" +minuti + ":" + sekunde);
    $("#trenutnoVreme>h2").replaceWith('<p>' + datumInfo+ '</p><p>' + vremeInfo +'</p>');
    
}

kupiKartu();
odrediVreme();
