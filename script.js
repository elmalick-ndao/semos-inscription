const form = document.getElementById("form");

form.addEventListener("submit", async function(e) {

e.preventDefault();

const inputs = document.querySelectorAll("input");

const data = {
nom: inputs[0].value,
prenom: inputs[1].value,
telephone: inputs[2].value,
email: inputs[3].value,
adresse: inputs[4].value,
formation: document.querySelector("select").value
};

try {

await fetch(
"https://script.google.com/macros/s/AKfycbzJYw8Yc5ZdedZqW4p_DpU4ofzdL4vnCdCcZLkOmhPd7QHF4pl4bFsYXYKwLstC46xJ-g/exec",
{
method: "POST",
body: JSON.stringify(data)
}
);

alert(
"Inscription enregistrée avec succès !\n\nMerci d'avoir choisi SEMOS THIÈS."
);

form.reset();

}
catch(error){

alert(
"Erreur lors de l'enregistrement."
);

console.error(error);

}

});