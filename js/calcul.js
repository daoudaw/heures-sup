function calcul()
{
    var heures_contrat = 456;
    var heures_travaillees = document.getElementById("heures").value;
    var heures_sup = 0;
    var resultat= document.getElementById("resultat");

    if(heures_travaillees > heures_contrat) 
    {
        heures_sup= heures_travaillees - heures_contrat;
        resultat.innerHTML= "Vous avez fait <strong>" + heures_sup + "h</strong> supplémentaires.";
    }
    
    else if(heures_travaillees <= heures_contrat)
        {
            resultat.innerHTML= "Vous n'avez pas fait d'heures supplémentaires.";
        }
    else 
        {
            resultat.innerHTML= "Erreur de saisie."
            
        }
    return heures_sup.toFixed(2);
    
    
  

}











