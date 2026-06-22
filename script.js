console.log("script.js est bien branché !");
const prenom = "Fatou";
console.log("Bonjour " + prenom);
console.log(`Bonjour ${prenom}, prêt(e) à coder ?`);
const pseudo = "Aminata"; // texte (string)
let score = 0;
// nombre (number), va changer-> let
const partieFinie = false; // booléen (boolean)
console.log(`Joueur : ${pseudo}`);
console.log(`Score de départ : ${score}`);
score = score + 5;
// on réécrit l'ardoise
console.log(`Nouveau score : ${score}`); // 5
function direBonjour(nom){
return `Bonjour ${nom},bienvenue sur Jàng Afrig!`;
}
console.log(direBonjour("Cheikh"));
console.log(direBonjour("Ndèye"));
function appreciation(note){
if(note >=16){
return"Très bien";
} else if(note>=12){
return"Bien";
} else if(note>=10){
return"Passable";
} else {
return"À retravailler";
}
}
console.log(appreciation(14)); //"Bien"
console.log(appreciation(8)); //"Àretravailler"
function statutMajorite(age){
return age>=18? "majeur" :"mineur";
}
console.log(statutMajorite(20)); //"majeur"
const pays =["Sénégal", "Mali", "Ghana","Kenya"];
for (const nom of pays) {
console.log(`Pays africain: ${nom}`);
}
console.log(`Il y a ${pays.length} pays dans la liste.`);
function fcfaVersEuro(montant) {
return montant / 656;
}
console.log(fcfaVersEuro(10000)); // environ 15.24
function moyenne(notes) {
let somme = 0;
for (const note of notes) {
somme = somme + note;
}
return somme / notes.length;
}
const notesAminata = [12, 15, 9, 14];
console.log(`Moyenne : ${moyenne(notesAminata)}`); // 12.5
function estMajeur(age) {
return age >= 18;
}
console.log(estMajeur(20)); // true
console.log(estMajeur(16)); // false
function fizzBuzzSenegal() {
for (let n = 1; n <= 30; n++) {
if (n % 15 === 0) {
console.log("Thiéboudienne");
} else if (n % 3 === 0) {
console.log("Thié");
} else if (n % 5 === 0) {
console.log("Bou");
} else {
console.log(n);
}
}
}
fizzBuzzSenegal();
function estPalindrome(mot) {
let inverse = "";
for (const lettre of mot) {
inverse = lettre + inverse; // on empile à l'envers
}
return mot === inverse;
}
console.log(estPalindrome("kayak")); // true
console.log(estPalindrome("Dakar")); // false
const villes = ["Dakar", "Thiès", "Saint-Louis", "Ziguinchor"];
console.log(villes[0]); //"Dakar"-> oncompteà partir de0 !
console.log(villes[2]); //"Saint-Louis"
console.log(villes.length); //4 (le nombred'éléments)
villes.push("Touba"); //ajoute àla fin
console.log(villes.length); //5
villes.pop(); //retire ledernier
console.log(villes.length); //4
const ville = ["Dakar","Thiès","Saint-Louis"];
villes.forEach((ville) => {
console.log(`Ville : ${ville}`);
});
const prixFcfa = [656, 1312, 3280]; // des prix en FCFA
const prixEuro = prixFcfa.map((p) => p / 656);
console.log(prixEuro); // [1, 2, 5]
console.log(prixFcfa); // [656, 1312, 3280]-> l'original n'a pas changé !
const notes = [12, 7, 15, 9, 18, 10];
const admis = notes.filter((note) => note >= 10);
console.log(admis); // [12, 15, 18, 10]-> seulement les notes >= 10
const etudiant = {
nom: "Fatou",
age: 20,
ville: "Dakar"
};
console.log(etudiant.nom);
// "Fatou"-> accès par le point
console.log(etudiant.age);
// 20
console.log(etudiant["ville"]); // "Dakar"-> autre écriture, avec crochets
const etudiants = [
{ nom: "Fatou", note: 12 },
{ nom: "Moussa", note: 8 },
{ nom: "Awa", note: 15 }
];
// Parcourir et afficher chaque étudiant
etudiants.forEach((e) => {
console.log(`${e.nom} a eu ${e.note}/20`);
});
// Vue en tableau dans la console (très pratique pour vérifier)
console.table(etudiants);
