function validacija(){

    var ime = document.forms["kontaktForma"]["ime"];
    var prezime = document.forms["kontaktForma"]["prezime"];
    var telefon = document.forms["kontaktForma"]["telefon"];
    var datum = document.forms["kontaktForma"]["calendar"];

    if (ime.value == "")                                  
    { 
        event.preventDefault();
        window.alert("Niste uneli svoje ime."); 
        ime.focus(); 
        return false; 
    } 

    if (prezime.value == "")                                  
    { 
        event.preventDefault();
        window.alert("Niste uneli svoje prezime."); 
        prezime.focus(); 
        return false; 
    } 
    if (datum.value ==="")                                  
    { 
        event.preventDefault();
        window.alert("Niste uneli datum."); 
        datum.focus(); 
        return false; 
    } 

    if (telefon.value.match(/^[0-9]{10}$/)==null)                           
    { 
        event.preventDefault();
        window.alert("Niste ispravno uneli broj telefona"); 
        telefon.focus(); 
        return false; 
    } 
   
    if(confirm("Da li ste sigurni"))
    { 
       alert("Uspešno ste rezervisali!");
    }else{
        alert("Niste rezervisali");
    }


}

function validacija1(){

    var ime = document.forms["pitanjeForma"]["ime"];
    var email = document.forms["pitanjeForma"]["email"];
    var zahtev = document.forms["pitanjeForma"]["zahtev"];
  
    if (ime.value == "")                                  
    { 
        event.preventDefault();
        window.alert("Niste uneli svoje ime."); 
        ime.focus(); 
        return false; 
    } 

    if (email.value == "" || !email.value.includes("@"))                                  
    { 
        event.preventDefault();
        window.alert("Niste uneli ispravan email."); 
        email.focus(); 
        return false; 
    } 

   
    if (zahtev.value == "")                                  
    { 
        event.preventDefault();
        window.alert("Niste uneli pitanje."); 
        email.focus(); 
        return false; 
    } 

   

    if(confirm("Da li želite da pošaljete?"))
    { 
       alert("Uspešno ste poslali!");
    }else{
        alert("Vaša poruka nije poslata!");
    }


}


function myFunction() {
    var checkBox = document.getElementById("poslovno");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}

