let formulaire = document.getElementById('mon_formulaire');
let regexlibelle = /^[a-zA-Z\s]+$/;
let regexdescription = /^[a-zA-Z\s]+$/;   
let minlibelle = 5;
let maxlibelle = 30;
let mindesc = 5;
let maxdesc = 500;

formulaire.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    
    // validation du libelle
    let libelle = document.getElementById('libelle_input');
    let erreur_libelle = document.getElementById('error');
    
    if (libelle.value.trim() === "") { 
        erreur_libelle.innerHTML = "Le libelle est requis";
        erreur_libelle.style.color = 'red';
        valid = false;
    } else if(libelle.value.length < minlibelle || libelle.value.length > maxlibelle){
        erreur_libelle.innerHTML = `Le libelle doit etre compris entre ${minlibelle} et  ${maxlibelle} `;
        erreur_libelle.style.color = 'red';
        valid = false;

    } else if(!regexlibelle.test(libelle.value)){
        erreur_libelle.innerHTML = `veuillez bien regarder les caracteres saisis`;
        erreur_libelle.style.color = 'red';
        valid = false;

    }
    if(valid){
        document.getElementById('desc_div').classList.remove('hidden');
    }

    // valodation pour la description
    let desc = document.getElementById('desc_input');
    let erreur_desc = document.getElementById('error_desc');

    if (desc.value.trim() === "") {
        erreur_desc.innerHTML = "La description de l'idee est requise";
        erreur_desc.style.color = 'red';
        valid = false;
    } else if (desc.value.length < mindesc || desc.value.length > maxdesc) {
        erreur_desc.innerHTML = `La description de l'idee doit contenir entre ${mindesc} et ${maxdesc} caractères`;
        erreur_desc.style.color = 'red';
        valid = false;
    } else {
        erreur_desc.innerHTML = ""; // Effacer le message d'erreur s'il est valide
    }

    // Si toutes les validations sont réussies
    if (valid) {
        document.getElementById('categorie_div').classList.remove('hidden');
    }

let categorieSelect = document.getElementById('categorie_input');

categorieSelect.addEventListener('change', function() {

    // Afficher le message de succès après avoir sélectionné une catégorie
    document.getElementById('submit_btn').classList.remove('hidden'); // Afficher le bouton Soumettre
     document.getElementById('mon_formulaire').classList.add('hidden');
    document.getElementById('success_message').classList.remove('hidden');})


});
