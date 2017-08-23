
var user = {
    nom : prompt ("Quelles est votre nom ??"),
    prenom : prompt ("Quelles est votre prenom ??"),
    pays :  prompt ("Quelles est votre pays  ??"),
    age : prompt ("Quelles est votre ages ??"),
    moyenDePayement: ["visa", "Mastercard","Paypal",],
    date : 2017,
    
    

    
};



var reffus  ={
    refusages : "Vous avais pas l'ages pour commandez l'ages minimum et 18 Ans !! ",
    reffuspays : "Désoler Votre pays ne vous permet pas de profité de nos offres",
    reffuspaiment : " Desoler Seul les moyens de paiment suivant sont acceptez (Payapl,Skril,Mastercard,visa)",
}


var accept = {

    acceptpays  :  " Votre pays vous permet de profité de nos offres !! ",
    acceptages : "Vous Avais l'ages pour commendez faite vous plaisire "
}









var verif = {
    paysAccep : ["France","Belgique","Suisse","france","belgique","suisse"],
    agesMnim : 18 ,
 

 };
function compar () {

    if((user.pays === verif.paysAccep[0]) || (user.pays === verif.paysAccep[1]) || (user.pays === verif.paysAccep[2]) || (user.pays === verif.paysAccep[3]) || (user.pays === verif.paysAccep[4])||(user.pays === verif.paysAccep[5]) || (user.pays === verif.paysAccep[6]))
        {
            document.getElementById("erreur").innerHTML=accept.acceptpays;
            document.getElementById("erreur-2").className = " alert-success";
            
    }

    else{
        document.getElementById("erreur").innerHTML=reffus.reffuspays; 
        document.getElementById("erreur-2").className = " alert-danger";
        
    }


    if (user.age >= verif.agesMnim ) {
        document.getElementById("erreur1").innerHTML=accept.acceptages;
        document.getElementById("erreur-1").className = " alert-success";
    }

    else {
        document.getElementById("erreur1").innerHTML=reffus.refusages;
        document.getElementById("erreur-1").className = "alert-danger";
    }
}




 
document.getElementById("nom").innerHTML= 


`
Votre nom :
${user.nom}
`




document.getElementById("prenom").innerHTML= 
`
Votre Prenom :
${user.prenom}
`


document.getElementById("age").innerHTML= 
`
Votre age :
${user.age} ans 
`

document.getElementById("date").innerHTML= 
`
Votre Année de naissances :
${user.date - user.age} 
`







compar ()
