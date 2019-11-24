(function odrediVreme(){
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
    
})();